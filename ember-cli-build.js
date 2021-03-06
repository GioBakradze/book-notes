/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.


    // bootstram theme
    app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
    app.import('bower_components/bootstrap/dist/css/bootstrap-theme.min.css');


    // font-awesome
    var fa = {
        destDir: 'fonts'
    };
    app.import('bower_components/font-awesome/css/font-awesome.min.css');
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf', fa);
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg', fa);
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.eot', fa);
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff', fa);
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2', fa);
    app.import('bower_components/font-awesome/fonts/FontAwesome.otf', fa);

  return app.toTree();
};
