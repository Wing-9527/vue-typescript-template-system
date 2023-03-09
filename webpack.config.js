const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DotEnv = require('dotenv-webpack')
const UnpluginAutoImportWebpack = require('unplugin-auto-import/webpack')
// load env
const loadEnv = require('./config/loadEnv')
const env = loadEnv(process.env)
// auto import options
const autoImportOptions = require('./config/autoImportOptions')

module.exports = {
  entry: './src/main.ts',
  mode: env,
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    // open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: ['/node_modules'],
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        exclude: ['/node_modules'],
        use: ['vue-loader'],
      },
      {
        test: /\.[jt]sx$/,
        exclude: ['/node_modules'],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: ['/node_modules'],
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        exclude: ['/node_modules'],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.TTF$/i,
        exclude: ['/node_modules'],
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.json', '.ts', '.vue', '.jsx', '.tsx'],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'vue-typescript-template-system',
      template: './index.html',
    }),
    new VueLoaderPlugin(),
    new DotEnv({
      path: `./.env.${env}`,
    }),
    UnpluginAutoImportWebpack(autoImportOptions),
  ],
  performance: {
    maxAssetSize: 500000,
    maxEntrypointSize: 500000,
  },
}
