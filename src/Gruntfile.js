var path = require('path');
var dir = __dirname;
var basepath = path.resolve(dir, './');
var exec = require('child_process').exec;

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    lithe: {
      example: {
        options: {
          basepath: basepath,
          alias: {
            '$': 'mods/jquery.js'
          }
        },
        files: {
          '../assest/conf/': 'conf/'
        }
      }
    },
    concat: {
      config: {
        files: {
          '../assest/lithe-min.js': ['node_modules/lithe/lithe.min.js', 'config.js']
        }
      }
    },
    uglify: {
      options: {
        mangle: {
          except: ['require']
        }
      },
      apps: {
        src: '../assest/conf/*.js',
        dest: '../assest/conf/',
        expand: true,
        flatten: true,
        ext: '.js'
      },
      config: {
        files: {
          "../assest/lithe-min.js": ['../assest/lithe-min.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-lithe');

  grunt.registerTask('default', ['concat', 'lithe', 'uglify']);
};

