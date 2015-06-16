var oauth = require('../firefox-addons/addon-google-oauth2');

var oauth2_options = require('./secret/oauth2_options');

module.exports = {
  refreshToken: function(callback) {
    oauth.refreshToken(oauth2_options, callback);
  }
};
