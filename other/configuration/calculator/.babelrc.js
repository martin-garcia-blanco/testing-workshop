/* const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [['env', {modules: isTest ? 'commonjs' : false}], 'react'],
  plugins: [
    'syntax-dynamic-import',
    'transform-class-properties',
    'transform-object-rest-spread',
  ],
} */

const isTest = String(process.env.NODE_ENV) === 'test'

// Babel needs to recieve it's config as a function on module.exports so we
// have to wrap our object in a function
const test = (api) => {
  // Babel requires api.cache(true | false) to be set
  api.cache(true)

  return {
    presets: [
      ['@babel/preset-env', {modules: isTest ? 'commonjs' : false}],
      '@babel/preset-react',
    ],
    plugins: [
      'syntax-dynamic-import',
      'transform-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      isTest ? 'dynamic-import-node' : null,
    ],
  }
}

module.exports = test

/*
Solution snippets below
































































const isTest = String(process.env.NODE_ENV) === 'test'


for the env plugin modules config:
isTest ? 'commonjs' : false

For dynamic import config in plugins
isTest ? 'dynamic-import-node' : null
 */
