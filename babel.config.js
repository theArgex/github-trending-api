module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '8',
          browsers: '> 0.25%, not dead',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    'lodash',
    '@babel/plugin-transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
};
