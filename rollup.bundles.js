const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const progress = require('rollup-plugin-progress');
const filesize = require('rollup-plugin-filesize');
const minifyPlugin = require('rollup-plugin-babel-minify');
const pkg = require('./package.json');

const outputPath = 'lib';
const filename = pkg.name;

const banner = `/*
${pkg.name} @ ${pkg.version}
License: ${pkg.license}
Built: ${new Date().toISOString()}
*/`;

const config = ({ minify = false, legacy = false } = {}) => {
  const input = 'src/index.js';
  const watch = {
    include: 'src/**',
  };

  const babelConfig = {
    exclude: 'node_modules/**', // only transpile our source code
    // plugins: ['@babel/plugin-external-helpers'],
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: false,
          targets: {
            browsers: [
              'last 2 chrome versions',
              'last 2 firefox versions',
              'last 1 edge version',
              'last 1 safari version',
            ],
            node: '8.14',
          },
        },
      ],
    ],
  };

  if (legacy) {
    babelConfig.presets = [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'usage',
          targets: {
            browsers: [
              'last 2 versions',
              '> 5%',
              'ie >= 11',
              'Safari >= 7',
              'not op_mini all',
              'not dead',
            ],
            node: '6.16',
          },
        },
      ],
    ];
  }

  const plugins = [
    progress(),
    commonjs(),
    nodeResolve({
      module: true,
      main: true,
      jsnext: false,
      browser: false,
      preferBuiltins: true,
    }),
    babel(babelConfig),
    filesize(),
  ];

  if (minify) {
    plugins.push(
      minifyPlugin({
        comments: false,
        sourceMap: true,
        banner,
      })
    );
  }

  return {
    input,
    plugins,
    watch,
  };
};

exports.main = {
  ...config(),
  output: [
    {
      file: `${outputPath}/${filename}.mjs`,
      format: 'es',
      name: pkg.name,
      banner,
    },
    {
      file: `${outputPath}/${filename}.js`,
      format: 'umd',
      name: pkg.name,
      sourcemap: true,
      banner,
    },
  ],
};

exports.min = {
  ...config({ minify: true }),
  output: {
    file: `${outputPath}/${filename}.min.js`,
    format: 'umd',
    name: pkg.name,
    sourcemap: true,
  },
};

exports.legacy = {
  ...config({ minify: true, legacy: true }),
  output: {
    file: `${outputPath}/${filename}.es5.js`,
    format: 'umd',
    name: pkg.name,
    sourcemap: true,
  },
};
