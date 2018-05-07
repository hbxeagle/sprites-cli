# sprites-cli

> A command-line interface for css sprites using [gulp.spritesmith](https://www.npmjs.com/package/gulp.spritesmith)

## Installation

``` bash
  $ [sudo] npm install sprites-cli -g
```

## Usage

**Example**

sprite images in the current directory

``` bash
  $ sprt
```

sprite images in the current directory and use rem as unit to generate css.

``` bash
  $ sprt -r
```

sprite pngs in src/icons

``` bash
  $ sprt -f 'src/icons/*.png' -r -a 'top-down' -d './dist'
```

**Options**
```
  $ sprt -h

  Usage: sprt [options]

  A command-line interface for css sprites

  Options:

    -h, --help               output usage information
    -V, --version            output the version number
    -r, --rem                using rem as unit to generate css
    -a, --algorithm [value]  images layout: top-down left-right diagonal alt-diagonal binary-tree
    -f, --files [value]      images, using minimatch rules
    -d, --dist [value]       dest dir
```

**Update**

* 0.1.1 disable spritesmith’s own sort, to be consistent with the input order.

