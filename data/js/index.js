var data = require("sdk/self").data;
// Construct a panel, loading its content from the "text-entry.html"
// file in the "data" directory, and loading the "get-text.js" script
// into it.
var text_entry = require("sdk/panel").Panel({
  contentURL: data.url("TodoApp.html"),
  contentScriptFile: data.url("js/TodoAppBundle.js"),
  onHide: handleHide
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
    text_entry.show({
      position: button
    });
  }
};

function handleHide() {
  button.state('window', {checked: false});
};
