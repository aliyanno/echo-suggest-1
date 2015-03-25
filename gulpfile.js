var gulp = require('gulp')
  , path = require('path')
  , del = require('del')
  , mainBowerFiles = require('main-bower-files');

var $ = require('gulp-load-plugins')({
  scope: ['devDependencies'],
  camelize: true,
  lazy: true
})

const ROOT = path.join(__dirname)
  , APP = path.join(ROOT, 'app')
  , DIST = path.join(ROOT, 'dist')
  , FILES = {
    entry: path.join(APP, 'src', 'entry.es6'),
    index: path.join(APP, 'index.html'),
    serveHTML: path.join(DIST, 'index.html')
  }

gulp.task('clean', function(done){
  del.sync([ DIST ])
  done()
})

gulp.task('copy:html', function(){
  gulp.src(FILES.index)
    .pipe(gulp.dest(DIST))
    .pipe($.connect.reload())
})

gulp.task('bower:files', function() {
  gulp.src(mainBowerFiles())
    .pipe($.stripCode({
      pattern: /\/\*\# sourceMapping.+\*\//
    }))
    .pipe(gulp.dest(DIST + '/vendor'))
});

gulp.task('scripts:build', function(){
  gulp.src(FILES.entry)
    .pipe($.webpack({
      output: {
        filename: '[name].js'
      },
      devtool: 'source-map',
      target: 'web',
      watch: true,
      resolve: {
        extensions: ['', '.es6', '.js']
      },
      module: {
        loaders: [
          {
            test: /\.es6$/,
            exclude: /node_modules/,
            loaders: [ 'babel?experimental&optional=runtime&playground' ]
          }
        ]
      }
    }))
    .pipe(gulp.dest(DIST))
    .pipe($.connect.reload())
})

gulp.task('connect:start', function(){
  $.connect.server({
    root: DIST,
    livereload: true
  })
  gulp.src(FILES.serveHTML)
    .pipe($.open('', {
      url: 'http://localhost:8080'
    }))
});

gulp.task('watch:html', function(){
  gulp.watch(FILES.index, ['copy:html'])
});

gulp.task('dev', [
    'copy:html',
    'bower:files',
    'scripts:build',
    'connect:start',
    'watch:html'
  ])


gulp.task('default', $.taskListing)