import * as fs from 'fs'

import { LocalFile } from './LocalFile'
import { UploadedFile } from './UploadedFile'

// eslint-disable-next-line no-unused-vars
const fsPromises = fs.promises
// const DISCORD_LIMIT_FILE_SIZE = 10485760

class FileUploadProcess {
  _localPath: string
  _channelId: string
  _botToken: string
  _LocalFiles: LocalFile[] = []
  _UploadedFiles: UploadedFile[] = []
  constructor(localPath: string, channelId: string, botToken: string) {
    this._localPath = localPath
    this._channelId = channelId
    this._botToken = botToken
  }
}
export { FileUploadProcess }
