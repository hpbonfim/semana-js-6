import { dirname, join } from "path"
import { fileURLToPath } from "url"

type ConfigTypes = {
  port: string | number,
  pages: {
    homeHTML: string
    controllerHTML: string
  },
  location: {
    home: string
  },
  dir: {
    root: string
    publicDirectory: string
    audioDirectory: string
    songsDirectory: string
    fxDirectory: string
  },
  constants: {
    CONTENT_TYPE: {
      [key: string]: string
    },
    audioMediaType: string
    songVolume: string
    fallbackBitRate: string
    bitRateDivisor: number
    englishConversation: string
  }
}

const currentDir = dirname(fileURLToPath(import.meta.url))
const root = join(currentDir, '../')

export default {
  port: process.env.PORT || 3000,
  pages: {
    homeHTML: 'home/index.html',
    controllerHTML: 'controller/index.html',
  },
  location: {
    home: '/home'
  },
  dir: {
    root,
    publicDirectory: join(root, 'public'),
    audioDirectory: join(root, 'audio'),
    songsDirectory: join(root, 'songs'),
    fxDirectory: join(root, 'fx')
  },
  constants: {
    CONTENT_TYPE: {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'text/javascript'
    },
    audioMediaType: 'mp3',
    songVolume: '0.99',
    fallbackBitRate: '128000',
    bitRateDivisor: 8,
    englishConversation: join(join(root, 'songs'), 'conversation.mp3')
  }
} as ConfigTypes