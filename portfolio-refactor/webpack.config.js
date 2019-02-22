var path = require("path")

module.exports = {
  "output": {
    "filename": "[name].pack.js",
  },
  "module": {
    "rules": [
      {
        "test": /\.less$/,
        "use": [
          'style-loader',
          'css-loader',
          'less-loader'
      ]
      },
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "babel-preset-env",
              "babel-preset-react"
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      },
    ]
  },
  "entry": {
    "index": "./index"
  }
};