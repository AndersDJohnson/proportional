module.exports = function (grunt) {

  grunt.initConfig({

    copy: {
      dist: {
        files: {
          'dist/proportional.css': 'src/proportional.css'
        }
      }
    },

    cssmin: {
      dist: {
        expand: true,
        cwd: 'dist',
        src: ['*.css', '!*.min.css'],
        dest: 'dist',
        ext: '.min.css'
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['copy', 'cssmin']);
};
