const path = require(`path`);


module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: true,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: `babel-loader`,
        },
      },
    ],
  },
  devtool: `source-map`,
};
