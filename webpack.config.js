const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const DotEnv = require('dotenv-webpack')
// env
// const loadEnv = require('./config/loadEnv')
// const env = loadEnv(process.env)

module.exports = {
  entry: './src/main.ts',
  // mode: env,
  context: path.resolve(__dirname),
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js',
  //   publicPath: '/'
  // },
  devServer: {
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        // exclude: ['/node_modules'],
        use: [
          'ts-loader'
        ]
      },
      {
        test: /\.vue$/,
        // exclude: ['/node_modules'],
        use: [
          'vue-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.vue']
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'vue-typescript-template-system',
      template: './index.html'
    }),
    new VueLoaderPlugin(),
    // new DotEnv({
    //   path: `./env.${env}`
    // })
  ],
  performance: {
    maxAssetSize: 500000,
    maxEntrypointSize: 500000
  }
}
