const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    background: path.join(__dirname, "js/background.js"),
    content: path.join(__dirname, "js/content.js"),
    option: path.join(__dirname, "js/option.js")
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js",
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: ".", 
          to: "../",
          context: "public"
        }
      ]
    })
  ],
  
};
