import * as fs from 'fs'

// eslint-disable-next-line no-unused-vars
const fsPromises = fs.promises
// const DISCORD_LIMIT_FILE_SIZE = 10485760

class UploadedFile {
  _url: string
  _messageId: string
  _hashString: string
  constructor(url: string, messageId: string, hashString: string = '') {
    this._url = url
    this._messageId = messageId
    this._hashString = hashString
  }

  static async create(
    url: string,
    messageId: string,
    hashString: string = ''
  ): Promise<UploadedFile> {
    // const fstat = await fsPromises.stat(path)
    const file = new UploadedFile(url, messageId, hashString)

    return file
  }
}
export { UploadedFile }
