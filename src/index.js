import program from 'commander'
import pkg from '../package.json';

import run from './run'

program
  .version(pkg.version)
  .option('-r, --rem','using rem as unit to generate css')
  .option('-a, --algorithm [value]','images layout: top-down left-right diagonal alt-diagonal binary-tree')
  .option('-f, --files [value]','images, using minimatch rules')
  .option('-d, --dist [value]','dest dir')
  .description('A command-line interface for css sprites')
  .parse(process.argv);

run(program);