/*
 * @Author: your name
 * @Date: 2023-06-06 16:45:06
 * @LastEditTime: 2023-06-06 16:57:38
 * @LastEditors: localhost
 * @Description: In User Settings Edit
 * @FilePath: /vuex-test/webpack.config.ts
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pkg = require("./package.json");
var path = require("path");

module.exports = {
  mode: "development",
  entry: {
    vuex: "./src/index.ts",
  },
  output: {
    // 文件的名称
    filename: `[name]-${pkg.version}.js`,
    // 生成的文件路径
    path: path.resolve(__dirname, "../dist"),
    libraryTarget: "umd",
    // 名字
    library: {
      root: "[name]",
      amd: "[name]",
      commonjs: "[name]",
    },
    globalObject: "this",
    libraryExport: "default",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 匹配所有的TypeScript文件
        exclude: /node_modules/, // 排除node_modules目录
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      scriptLoading: "blocking",
      inject: "head",
    }),
  ],
};
