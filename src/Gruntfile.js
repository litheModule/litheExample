var path = require('path');
var dir = __dirname;
var basepath = path.resolve(dir, './');
var exec = require('child_process').exec;

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		lithe: {
			cblog: {
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
					'../assest/lithe-min.js': ['lithe/lithe.min.js', 'config.js']
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
		},
		watch: {
			scripts: {
				files: ['conf/*.js','commons/*.js','mods/*.js'],
				options:{
					spawn:false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-shelltask');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-lithe');

	grunt.event.on('watch', function(action, filepath, target) {
		exec('chromix reload');		
	});

	grunt.registerTask('default', ['concat', 'lithe', 'uglify']);
};

