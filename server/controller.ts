import { Service } from "./service.js"

export class Controller {
  public service

  constructor() {
    this.service = new Service()
  }

  async getFileStream(filename: any) {
    return this.service.getFileStream(filename)
  }
}