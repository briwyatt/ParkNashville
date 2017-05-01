module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        predef: [ "document", "console", "$", "$scope", "firebase"],
        esnext: true,
        globalstrict: true,
        globals: {"angular": true, "app": true}
      },
      files: ['..parknashville/app/**/*.js']
    },
    watch: {
      javascripts: {
        files: ['..parknashville/app/**/*.js'],
        tasks: ['jshint']
      },
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'watch']);
};
