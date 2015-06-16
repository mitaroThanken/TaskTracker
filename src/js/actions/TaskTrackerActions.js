var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/TaskTrackerConstants');

var RouterContainer = require('../routing/RouterContainer');

var TaskTrackerActions = {

  refreshToken: function() {
    self.port.emit(Constants.TT_REFRESH_TOKEN);
  }
};

self.port.on(Constants.TT_REFRESH_TOKEN_CALLBACK, function(token) {
  console.log('Got an OAuth token: ' + token + '\n');
  if (typeof token === undefined) return; // 承認コードが取得できなかった
  RouterContainer.get().transitionTo('/Main');
});

module.exports = TaskTrackerActions;
