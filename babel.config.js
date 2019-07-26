module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { targets: { node: 'current' } },
    ],
    '@babel/preset-react',
  ],
  env: {
    production: {
      plugins: [
        ['react-remove-properties', { properties: ['data-testid'] }],
      ],
    },
  },
};
