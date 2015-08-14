/*global module:false*/
module.exports = function(grunt) {

  // Load all Grunt tasks that are listed in package.json
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        node: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
    },
    // sass (libsass)
    sass: {
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'dist/css/main.css': 'src/scss/main.scss',
        },
      },
    },
    // autoprefixer
    postcss: {
      options: {
        processors: require('autoprefixer-core')({browsers: 'last 2 versions'}),
      },
      dist: {
        src: 'dist/css/main.css',
      },
    },
    // watch
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      styles: {
        files: ['**/*.scss'],
        tasks: ['sass', 'postcss'],
      },
    },
  });

  // Default task.
  grunt.registerTask('default', ['sass', 'postcss', 'jshint', 'watch']);

};
