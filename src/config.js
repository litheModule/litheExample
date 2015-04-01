define('config', function(require, exports, module) {
  var debug = (/debug/).test(location.search);
  module.exports = {
    alias: {
      '$': 'mods/jquery.js'
    },
    basepath: debug ? 'http://lithe.example/src/': 'http://lithe.example/assest/'
  };
});

