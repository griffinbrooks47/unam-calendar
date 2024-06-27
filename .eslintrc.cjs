module.exports = {
  extends: ['mantine'],
  parserOptions: {
    project: './student-client/tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
  },
};
