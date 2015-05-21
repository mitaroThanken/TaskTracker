(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"sdk/panel":undefined,"sdk/self":undefined,"sdk/ui/button/toggle":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWl0YXJvL0RvY3VtZW50cy9HaXRSb290L1Rhc2tUcmFja2VyL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDcEMsb0VBQW9FO0FBQ3BFLHFFQUFxRTtBQUNyRSxXQUFXO0FBQ1gsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQztFQUMxQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFDcEMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztFQUNsRCxNQUFNLEVBQUUsVUFBVTtBQUNwQixDQUFDLENBQUMsQ0FBQzs7QUFFSCxrQkFBa0I7QUFDbEIsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUMsWUFBWSxDQUFDO0VBQ3hELEVBQUUsRUFBRSxZQUFZO0VBQ2hCLEtBQUssRUFBRSxZQUFZO0VBQ25CLElBQUksRUFBRTtJQUNKLElBQUksRUFBRSxzQkFBc0I7SUFDNUIsSUFBSSxFQUFFLHNCQUFzQjtJQUM1QixJQUFJLEVBQUUsc0JBQXNCO0dBQzdCO0VBQ0QsUUFBUSxFQUFFLFlBQVk7QUFDeEIsQ0FBQyxDQUFDLENBQUM7O0FBRUgsU0FBUyxZQUFZLENBQUMsS0FBSyxFQUFFO0VBQzNCLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtJQUNqQixVQUFVLENBQUMsSUFBSSxDQUFDO01BQ2QsUUFBUSxFQUFFLE1BQU07S0FDakIsQ0FBQyxDQUFDO0dBQ0o7QUFDSCxDQUFDLENBQUM7O0FBRUYsU0FBUyxVQUFVLEdBQUc7RUFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztDQUMxQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBkYXRhID0gcmVxdWlyZShcInNkay9zZWxmXCIpLmRhdGE7XG4vLyBDb25zdHJ1Y3QgYSBwYW5lbCwgbG9hZGluZyBpdHMgY29udGVudCBmcm9tIHRoZSBcInRleHQtZW50cnkuaHRtbFwiXG4vLyBmaWxlIGluIHRoZSBcImRhdGFcIiBkaXJlY3RvcnksIGFuZCBsb2FkaW5nIHRoZSBcImdldC10ZXh0LmpzXCIgc2NyaXB0XG4vLyBpbnRvIGl0LlxudmFyIHRleHRfZW50cnkgPSByZXF1aXJlKFwic2RrL3BhbmVsXCIpLlBhbmVsKHtcbiAgY29udGVudFVSTDogZGF0YS51cmwoXCJUb2RvQXBwLmh0bWxcIiksXG4gIGNvbnRlbnRTY3JpcHRGaWxlOiBkYXRhLnVybChcImpzL1RvZG9BcHBCdW5kbGUuanNcIiksXG4gIG9uSGlkZTogaGFuZGxlSGlkZVxufSk7XG5cbi8vIENyZWF0ZSBhIGJ1dHRvblxudmFyIGJ1dHRvbiA9IHJlcXVpcmUoXCJzZGsvdWkvYnV0dG9uL3RvZ2dsZVwiKS5Ub2dnbGVCdXR0b24oe1xuICBpZDogXCJzaG93LXBhbmVsXCIsXG4gIGxhYmVsOiBcIlNob3cgUGFuZWxcIixcbiAgaWNvbjoge1xuICAgIFwiMTZcIjogXCIuL2ltYWdlcy9pY29uLTE2LnBuZ1wiLFxuICAgIFwiMzJcIjogXCIuL2ltYWdlcy9pY29uLTMyLnBuZ1wiLFxuICAgIFwiNjRcIjogXCIuL2ltYWdlcy9pY29uLTY0LnBuZ1wiXG4gIH0sXG4gIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2Vcbn0pO1xuXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2Uoc3RhdGUpIHtcbiAgaWYgKHN0YXRlLmNoZWNrZWQpIHtcbiAgICB0ZXh0X2VudHJ5LnNob3coe1xuICAgICAgcG9zaXRpb246IGJ1dHRvblxuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBoYW5kbGVIaWRlKCkge1xuICBidXR0b24uc3RhdGUoJ3dpbmRvdycsIHtjaGVja2VkOiBmYWxzZX0pO1xufTtcbiJdfQ==
