'use strict';

const minimatch = require('minimatch');
const register = require('@babel/register');

function setupCollectCoverage({
  rootDir,
  coveragePathIgnorePatterns,
  allowBabelRc,
}) {
  register({
    plugins: [
      [
        'babel-plugin-istanbul',
        {
          // files outside `cwd` will not be instrumented
          cwd: rootDir,
          useInlineSourceMaps: false,
          exclude: coveragePathIgnorePatterns,
        },
      ],
    ],
    ignore: [
      /node_modules/,
      filename => coveragePathIgnorePatterns.some(pattern => minimatch(filename, pattern)),
    ],
    babelrc: allowBabelRc,
    // compact: true,
    retainLines: true,
    sourceMaps: 'inline',
  });
}

module.exports = setupCollectCoverage;
