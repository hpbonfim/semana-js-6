import { Service } from "./service.js"
import { logger } from "./util.js"

export class Controller {
  public service

  constructor() {
    this.service = new Service()
  }

  async getFileStream(filename: any) {
    return this.service.getFileStream(filename)
  }
  
  async handleCommand({ command }: any) {
    logger.info(`command received: ${command}`)
    const result = {
      result: 'ok'
    }

    const cmd = command.toLowerCase()
    if (cmd.includes('start')) {
      this.service.startStreamming()
      return result
    }

    if (cmd.includes('stop')) {
      this.service.stopStreamming()
      return result
    }

  }

  createClientStream() {
    const {
      id,
      clientStream
    } = this.service.createClientStream()

    const onClose = () => {
      logger.info(`closing connection of ${id}`)
      this.service.removeClientStream(Number(id))
    }

    return {
      stream: clientStream,
      onClose
    }
  }
}