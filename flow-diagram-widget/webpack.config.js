const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'widget.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'StudyDesignFlowWidget',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this',
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'reactflow': 'ReactFlow'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: false, // This prevents automatic script injection
    }),
  ],
};