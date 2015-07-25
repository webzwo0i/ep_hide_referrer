var path = require("path");
var eejs = require('ep_etherpad-lite/node/eejs');
var settings = require('ep_etherpad-lite/node/utils/Settings');

if (!settings.ep_hide_referrer) {
  // use the redirect.html page
  exports.registerRoute = function (hook_name, args, callback) {
    args.app.get('/redirect', function(req, res) {
      res.send(eejs.require(__dirname + "/templates/redirect.html"));
    });
  }
}
else if (settings.ep_hide_referrer.host) {
  // use the configured redirection host
  exports.clientVars = function(hook, context, callback)
  {
    return callback({ "redirectionHost": settings.ep_hide_referrer.host });
  };
}
