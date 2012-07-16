// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = function(BasePlugin) {
    var HerokuPlugin;
    return HerokuPlugin = (function(_super) {

      __extends(HerokuPlugin, _super);

      function HerokuPlugin() {
        return HerokuPlugin.__super__.constructor.apply(this, arguments);
      }

      HerokuPlugin.prototype.name = "heroku";

      HerokuPlugin.prototype.files = {
        "config.json": "{\"version\":\"latest\"}",
        "Procfile": "web: node server.js",
        "server.js": "require('docpad').createInstance(function(err,docpadInstance){\n	if (err)  return console.log(err.stack);\n	docpadInstance.action('generate server',function(err){\n		if (err)  return console.log(err.stack);\n		console.log('OK');\n	});\n});"
      };

      HerokuPlugin.prototype.consoleSetup = function(opts, next) {
        var commanderInstance, docpadInterface;
        docpadInterface = opts.docpadInterface, commanderInstance = opts.commanderInstance;
        program.command('heroku ').description("deploy to heroku").action(function(command) {
          docpadInterface.applyConfiguration(command);
          return me.question(opts, docpadInterface.actionCompleted);
        });
        return next();
      };

      HerokuPlugin.prototype.question = function(opts, next) {
        var docpadInterface, program;
        docpadInterface = opts.docpadInterface, program = opts.program;
        return program.promptSingleLine('Type something?\n> ', function(input) {
          console.log("You typed: " + input);
          return next();
        });
      };

      return HerokuPlugin;

    })(BasePlugin);
  };

}).call(this);
