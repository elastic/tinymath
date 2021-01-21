module.exports = {
  exclude: 'node_modules/**', // only transpile our source code
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '2.6.12',
        targets: {
          browsers: [
            'last 2 chrome versions',
            'last 2 firefox versions',
            'last 1 edge version',
            'last 1 safari version',
          ],
          node: '12.0',
        },
      },
    ],
  ],
};
