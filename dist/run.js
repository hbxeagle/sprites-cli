'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var path = require('path');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var spritesmith = require('gulp.spritesmith');
var buffer = require('vinyl-buffer');

exports.default = function (options) {

  console.log("starting ...");
  var files = options.files || './*.{png,jpg,jpeg,gif}';
  var dist = options.dist || './build';
  var algorithm = options.algorithm || 'binary-tree';

  console.log(files);

  var args = {
    imgName: 'icons.png',
    cssName: 'icons.css',
    algorithm: algorithm,
    algorithmOpts: { sort: false }
  };

  if (options.rem) {
    args.cssTemplate = path.join(__dirname, '../handlebars/rem.handlebars');
    args.cssHandlebarsHelpers = {
      percent: function percent(offset, length, total) {
        var p = length - total !== 0 ? offset / (length - total) * 100 : 0;
        return p;
      },
      px2rem: function px2rem(length) {
        return length / 100;
      }
    };
  }

  var spriteData = gulp.src(files).pipe(spritesmith(args));

  var imgStream = spriteData.img.pipe(plumber()).pipe(buffer()).pipe(imagemin()).pipe(gulp.dest(dist + '/images'));

  var cssStream = spriteData.css.pipe(plumber()).pipe(csso()).pipe(gulp.dest(dist + '/styles'));
};