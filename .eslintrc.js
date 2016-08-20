module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
    "react"
    ],
    "rules": {
        "indent": [ "error", "tab"],
        "linebreak-style": ["error","unix"],
        "quotes": ["warn","single"],
        "semi": ["error","always"],
        "max-len": [1, 80, 4, {
          ignoreComments: true,
          ignoreUrls: true
      }],
      "no-console": "off"

  }
};