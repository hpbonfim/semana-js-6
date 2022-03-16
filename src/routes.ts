import { IncomingMessage, ServerResponse } from "http"
import config from "./config.js"
import { Controller } from "./controller.js"
import { logger } from "./util.js"

const {
  location,
  pages: { homeHTML, controllerHTML },
  constants: { CONTENT_TYPE }
} = config

const controller = new Controller()

async function routes(request: IncomingMessage, response: ServerResponse) {
  const { method, url } = request

  if (method === 'GET' && url === '/') {
    response.writeHead(302, {
      'Location': location.home
    })

    return response.end()
  }

  if (method === 'GET' && url === '/home') {

    const { stream } = await controller.getFileStream(homeHTML)

    // padrão do response: text/html
    return stream.pipe(response)
    // alternativa
    // response.writeHead(200, {
    //   'Content-Type': 'text/html'
    // })

  }

  if (method === 'GET' && url === '/controller') {

    const { stream } = await controller.getFileStream(controllerHTML)

    // padrão do response: text/html
    return stream.pipe(response)
    // alternativa
    // response.writeHead(200, {
    //   'Content-Type': 'text/html'
    // })
  }

  if (method === 'GET') {
    const { stream, type } = await controller.getFileStream(url)

    if (CONTENT_TYPE[type])
      response.writeHead(200, {
        'Content-Type': CONTENT_TYPE[type]
      })

    return stream.pipe(response)
  }
}

function handleError(error: any, response: ServerResponse) {
  if (error.message.includes('ENOENT')) {
    logger.warn(`asset not found ${error.stack}`)
    response.writeHead(404)
    return response.end()
  }

  logger.error(`caught error on API ${error.stack}`)
  response.writeHead(500)
  return response.end()
}

export function handler(request: IncomingMessage, response: ServerResponse) {

  return routes(request, response)
    .catch((error: any) => handleError(error, response))

}

// if (method === 'GET')
// switch (url) {
//   case '/':
//     response.writeHead(302, {
//       'Location': location.home
//     })

//     return response.end()

//   case '/home':
//     const { stream } = await controller.getFileStream(homeHTML)
//     // padrão do response: text/html
//     // alternativa
//     // response.writeHead(200, {
//     //   'Content-Type': 'text/html'
//     // })
//     return stream.pipe(response)

//   case '/controller':
//     // padrão do response: text/html
//     // alternativa
//     // response.writeHead(200, {
//     //   'Content-Type': 'text/html'
//     // })
//     return await (await controller.getFileStream(controllerHTML)).stream.pipe(response)

//   default:
//     response.writeHead(404)
//     return response.end()
// }