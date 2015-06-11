var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/TaskTrackerConstants');

var TaskTrackerActions = {

    refreshToken: function() {
        self.port.emit(Constants.TT_REFRESH_TOKEN);
    }
};

self.port.on(Constants.TT_REFRESH_TOKEN_CALLBACK, function(token) {
    console.log('Got an OAuth token: ' + token + '\n');
});

module.exports = TaskTrackerActions;
