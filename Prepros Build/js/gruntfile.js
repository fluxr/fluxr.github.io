module.exports = function(grunt) {
         grunt.initConfig({

             less: {
                 development: {
                     options: {
                         paths: ["less/"]
                     },
                     files: {"css/style.css": "less/style.less"}
                 },
                 production: {
                     options: {
                         paths: ["less/"],
                         cleancss: true
                     },
                      files: {"css/style.css": "less/style.less"}
                 }
             }
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.registerTask('default', ['less']);
     };