'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _run = require('./run');

var _run2 = _interopRequireDefault(_run);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(_package2.default.version).option('-r, --rem', 'using rem as unit to generate css').option('-a, --algorithm [value]', 'images layout: top-down left-right diagonal alt-diagonal binary-tree').option('-f, --files [value]', 'images, using minimatch rules').option('-d, --dist [value]', 'dest dir').description('A command-line interface for css sprites').parse(process.argv);

(0, _run2.default)(_commander2.default);