module.exports = {
  root: true,
  env: { browser: true, es2020: true,"node": true,"jest": true },





  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',    
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'eslint:recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:import/warnings',
    'plugin:import/errors'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs','vite.config.js'],
 
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  // plugins: ['react-refresh'],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }], // Allow JSX in .js files
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 0,
      'react-hooks/rules-of-hooks': 'error',
      'no-console': 0,
      'react/state-in-constructor': 0,
      'indent': 0,
      'linebreak-style': 0,
      'react/prop-types': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'react/jsx-filename-extension': [
        1,
        {
          'extensions': ['.js', '.jsx']
        }
      ],
      'prettier/prettier': [
        'error',
        {
          'trailingComma': 'es5',
          'singleQuote': true,
          'printWidth': 100,
          'tabWidth': 4,
          'semi': true,
          'endOfLine': 'auto'
        }
      ]
  },
  'plugins': ['react-refresh','prettier', 'react', 'react-hooks','import']



  





}



