module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 1. All configuration goes here
    grunt.initConfig({
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        }
    });

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['cssmin']);

};