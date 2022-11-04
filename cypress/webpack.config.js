const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jsx|js|tsx|ts)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: "@badeball/cypress-cucumber-preprocessor/webpack",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
  },
};
