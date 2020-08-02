const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy, addWebpackAlias } = require('customize-cra');

const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // 添加装饰器的能力
  addDecoratorsLegacy(),
  // 配置路径别名
  addWebpackAlias({
    "@": resolve("src")
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#1DA57A' },
    }
  }),
);