module.exports = function(grunt) {

        // 1. All configuration goes here
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            uglify: {
                build: {
                    src: 'js/perfmatters.js',
                    dest: 'js/perfmatters.min.js'
                }
            }
            Htmlmin: {
                build: {
                    src: '/index.html',
                    dest: '/index.html.min'
                }
            }
        });

        // 3. Where we tell Grunt we plan to use this plug-in.
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-htmlmin');

        // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
        grunt.registerTask('default', ['uglify']);
        grunt.registerTask('default', ['htmlmin']);

};
