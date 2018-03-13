const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const progress = require('rollup-plugin-progress');
const filesize = require('rollup-plugin-filesize');
const minify = require('rollup-plugin-babel-minify');
const pkg = require('./package.json');

const outputPath = 'lib';
const filename = pkg.name;

const banner = `/*
${pkg.name} @ ${pkg.version}
License: ${pkg.license}
Built: ${new Date().toISOString()}
*/`;

const config = {
  input: 'src/index.js',
  plugins: [
    progress(),
    commonjs(),
    nodeResolve({
      module: true,
      main: true,
      jsnext: false,
      browser: false,
      preferBuiltings: true,
    }),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    filesize(),
  ],
  watch: {
    include: 'src/**',
  },
};

exports.main = {
  ...config,
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
  ...config,
  output: {
    file: `${outputPath}/${filename}.min.js`,
    format: 'umd',
    name: pkg.name,
    sourcemap: true,
  },
  plugins: config.plugins.concat([
    minify({
      comments: false,
      sourceMap: true,
      banner,
    }),
  ]),
};

exports.legacy = {
  ...config,
  input: 'src/polyfill.js',
  output: {
    file: `${outputPath}/${filename}.es5.js`,
    format: 'umd',
    name: pkg.name,
    sourcemap: true,
  },
  plugins: config.plugins.concat([
    minify({
      comments: false,
      sourceMap: true,
      banner,
    }),
  ]),
};
