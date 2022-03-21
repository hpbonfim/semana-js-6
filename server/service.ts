import fs from "fs"
import fsPromises from 'fs/promises'
import config from "./config.js"
import { join, extname } from 'path'

const { dir: { publicDirectory } } = config

export class Service {
  createFileStream(filename: any) {
    return fs.createReadStream(filename)
  }

  async getFileInfo(file: any) {
    // file = home/index.html
    const fullFilePath = join(publicDirectory, file)

    await fsPromises.access(fullFilePath) // validação de arquivo existente
    const fileType = extname(fullFilePath)

    return {
      type: fileType,
      name: fullFilePath
    }
  }

  async getFileStream(file: any) {
    const { name, type } = await this.getFileInfo(file)

    return {
      stream: this.createFileStream(name),
      type
    }

  }
}