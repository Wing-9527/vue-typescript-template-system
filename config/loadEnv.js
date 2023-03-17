/** @func 加载环境 */
// function loadEnv(info) {
//   let directive = info['npm_lifecycle_event']
//   if (directive.includes(':')) directive = directive.replace(':', '_')
//   let matchResult =
//     info[`npm_package_scripts_${directive}`].match(/mode=(?<env>\w+)/)
//   return matchResult ? matchResult.groups.env : ''
// }

function loadEnv(info) {
  let directive = info['npm_lifecycle_script']
  let matchResult = directive.match(/mode=(?<env>\w+)/)
  return matchResult ? matchResult.groups.env : ''
}

module.exports = loadEnv
