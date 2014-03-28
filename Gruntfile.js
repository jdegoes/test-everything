module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({ 
  
    "clean": ["js", "externs"],
  
    "purescript-make": {
      lib: {
        src: [
          "bower_components/purescript-*/src/**/*.purs",
          "bower_components/purescript-*/src/**/*.purs.hs"
        ]
      }
    }
      
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-purescript");
  
  grunt.registerTask("default", ["clean", "purescript-make"]);
};
