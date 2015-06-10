var data = require("sdk/self").data;

var googleApi = require("./googleApi");

var appPanel = require("sdk/panel").Panel({
  contentURL: data.url("App.html"),
  contentScriptFile: data.url("js/AppBundle.js"),
  onHide: handleHide
});

function refreshTokenCallback(token) {
    console.log('Got an OAuth token: ' + token + '\n');
};

appPanel.port.on('login', function() {
    googleApi.refreshToken(refreshTokenCallback);
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
  button.state('window', {checked: false});
};
