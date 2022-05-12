// From the following video at - 4:15
// https://www.youtube.com/watch?v=zFoBYfMLUCM

const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    app: './src/app.js',
    vendor: ['react', 'react-dom'] // framework code, library code, gonna be reusing, across, stays the same
  },
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.CommonChunkPlugin('vendor', 'vendor.js') // This plugin is important, gotta check it out
  ]
  // plugins: []
};


// TODO: Explain, what does this do?
