import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import progress from 'rollup-plugin-progress';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import { name as _name, version, license } from './package.json';

const outputPath = 'lib';
const filename = _name;

const banner = `/*
${_name} @ ${version}
License: ${license}
Built: ${new Date().toISOString()}
*/`;

const config = ({ minify = false } = {}) => {
  const input = 'src/index.js';
  const watch = {
    include: 'src/**',
  };

  const plugins = [progress(), commonjs(), nodeResolve(), babel(), filesize()];

  if (minify) {
    plugins.push(terser());
  }

  return {
    input,
    plugins,
    watch,
  };
};

export const main = {
  ...config(),
  output: [
    {
      file: `${outputPath}/${filename}.mjs`,
      format: 'es',
      name: _name,
      banner,
    },
    {
      file: `${outputPath}/${filename}.js`,
      format: 'umd',
      name: _name,
      sourcemap: true,
      banner,
    },
  ],
};

export const min = {
  ...config({ minify: true }),
  output: {
    file: `${outputPath}/${filename}.min.js`,
    format: 'umd',
    name: _name,
    sourcemap: true,
  },
};
