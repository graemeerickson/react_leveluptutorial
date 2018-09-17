module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true
  },
  "settings": {
    "ecmascript": 6,
    "jsx": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "experimentalDecorators": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
  ],
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": 0,
    "no-console": 0,
    "padded-blocks": 0,
    "no-trailing-spaces": 0,
    "eol-last": 0
  }
};