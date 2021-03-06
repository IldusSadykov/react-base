module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'node': true,
    'es6': true
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'array-bracket-spacing': 2,
    'camelcase': [2, { 'properties': 'never' }],
    'comma-dangle': [1, 'never'],
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    'eol-last': 2,
    'indent': [2, 2],
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'max-depth': [2, 4],
    'max-len': [2, 120, 4],
    'max-params': [2, 4],
    'max-statements': [2, 10],
    'no-bitwise': 2,
    'no-class-assign': 2,
    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, { 'max': 2, 'maxEOF': 1 }],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-this-before-super': 2,
    'no-trailing-spaces': 2,
    'object-shorthand': [2, 'always'],
    'prefer-const': 2,
    'semi': [2, 'always'],

    'jsx-quotes': 2,
    'react/forbid-prop-types': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-curly-spacing': [2, 'always'],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': [2, { 'maximum': 2 }],
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-multi-comp': 2,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 2,
    'react/prop-types': [2, { ignore: ['children'] }],
    'react/react-in-jsx-scope': 2,
    'react/require-extension': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': [
      2,
      {
        order: [
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'state',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'constructor',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount'
          ]
        }
      }
    ],
    'react/sort-prop-types': 2,
    'react/wrap-multilines': 2
  }
};
