var data = require("sdk/self").data;

var Constants = require('./constants/TaskTrackerConstants');

var googleApi = require("./googleApi");

var appPanel = require("sdk/panel").Panel({
  contentURL: data.url("App.html"),
  contentScriptFile: [
    data.url("jquery/dist/jquery.min.js"),
    data.url("Honoka/dist/js/bootstrap.min.js"),
    data.url("js/AppBundle.js")
  ],
  onHide: handleHide
});

appPanel.port.on(Constants.TT_REFRESH_TOKEN, function() {
  googleApi.refreshToken(function(token) {
    appPanel.port.emit(Constants.TT_REFRESH_TOKEN_CALLBACK, token);
  });
});

// Create a button
var button = require("sdk/ui/button/toggle").ToggleButton({
  id: "show-panel",
  label: "Show Panel",
  icon: {
    "16": "./images/icon-16.png",
    "32": "./images/icon-32.png",
    "64": "./images/icon-64.png"
  },
  onChange: handleChange
});

function handleChange(state) {
  if (state.checked) {
    appPanel.show({
      position: button
    });
  }
};

function handleHide() {
  button.state('window', {
    checked: false
  });
};
