const path = require('path')

module.exports = function (request, options) {
  let realPath = request

  if (
    new RegExp(`${options.rootDir}/server/`).test(
      path.resolve(options.basedir, realPath),
    )
  ) {
    realPath = realPath.replace('.js', '.ts')
  }

  return options.defaultResolver(realPath, options)

}