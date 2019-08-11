module.exports = {
  "env": {
    "node": true,
    "commonjs": true
  },
  "extends": [
    'plugin:vue/recommended'
  ],
    "plugins": [
    "vue"
  ],
  "rules": {
    "vue/component-name-in-template-casing": ["error", "kebab-case"]
  }
}