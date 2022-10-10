const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: {      
      app: {
        name: 'google-chrome'
      }, 
    },
    hot: true,
    port: 8080,
    static: {
      directory: path.join(__dirname, 'public'),
      directory: path.join(__dirname, './src')
    },
  }
};


module.exports = (develop) => ({
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'inline-source-map' : 'none',
  entry: {
    index: path.resolve(__dirname, './src/index'),
    main: path.resolve(__dirname, './src/pages/main/main'),
    donate: path.resolve(__dirname, './src/pages/donate/donate'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  module: {
    rules: [   
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/main/index.html'),
      filename: 'index.html',
      chunks: ["index", "main"],
      favicon: './src/assets/images/panda_icon.ico'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/donate/donate.html'),
      filename: 'donate.html',
      chunks: ["index", "donate"],
      favicon: './src/assets/images/panda_icon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CopyPlugin({
      patterns: [
        { from: './public', to: './copies'}
      ]
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

  ],
  optimization: { 
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  ...devServer(develop),
});