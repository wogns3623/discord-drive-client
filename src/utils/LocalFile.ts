import crypto from 'crypto'
import * as fs from 'fs'

const fsPromises = fs.promises
const DISCORD_LIMIT_FILE_SIZE = 7864320 // 8MB

class LocalFile {
  _path: string
  _size: number
  _chunkCount: number
  _hashArray: string[] = []
  _cursor: number = 0
  constructor(path: string, size: number, chunkCount: number = 0) {
    this._path = path
    this._size = size
    this._chunkCount = chunkCount
    this._hashArray = new Array(chunkCount)
  }

  static async create(path: string): Promise<LocalFile> {
    const fstat = await fsPromises.stat(path)
    const chunkCount = Math.ceil(fstat.size / DISCORD_LIMIT_FILE_SIZE)
    const file = new LocalFile(path, fstat.size, chunkCount)
    return file
  }

  getChunk(index: number) {
    const chunkSize = DISCORD_LIMIT_FILE_SIZE
    const start = index * chunkSize
    const end = start + chunkSize
    if (!this._hashArray[index]) {
      const fd = fs.createReadStream(this._path, { start, end })
      const hash = crypto.createHash('sha1')
      hash.setEncoding('hex')
      fd.on('end', () => {
        hash.end()
        this._hashArray[index] = hash.read() // 해쉬 저장
      })
      fd.pipe(hash)
    }
    const chunkStream = fs.createReadStream(this._path, { start, end })
    return chunkStream
  }
}

// TODO: Stream으로 쪼개는 알고리즘 추가 쪼갠만큼의 md5 추가
// TODO : 메모리와 로컬 용량을 고민하면서 클래스 작성할것
export { LocalFile }
