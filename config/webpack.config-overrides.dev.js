module.exports = function(config) {
  let resolveExtensions = config.resolve.extensions;
  resolveExtensions.splice(resolveExtensions.length, 0, '.css')
}