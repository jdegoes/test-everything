module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({ 
  
    "purescript-make": {
      options: {
        tco: true,
        magicDo: true
      },
      lib: {
        src: [
          "bower_components/purescript-*/src/**/*.purs",
          "bower_components/purescript-*/src/**/*.purs.hs"
        ]
      }
    }
      
  });

  grunt.loadNpmTasks("grunt-purescript");
  grunt.registerTask("default", ["purescript-make"]);
};
