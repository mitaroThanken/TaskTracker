(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var data = require("sdk/self").data;
// Construct a panel, loading its content from the "text-entry.html"
// file in the "data" directory, and loading the "get-text.js" script
// into it.
var text_entry = require("sdk/panel").Panel({
  contentURL: data.url("text-entry.html"),
  contentScriptFile: data.url("js/get-text.js"),
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
}

function handleHide() {
  button.state('window', {checked: false});
}

// Listen for messages called "text-entered" coming from
// the content script. The message payload is the text the user
// entered.
// In this implementation we'll just log the text to the console.
text_entry.port.on("text-entered", function (text) {
  console.log(text);
  text_entry.hide();
});

},{"sdk/panel":undefined,"sdk/self":undefined,"sdk/ui/button/toggle":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWl0YXJvL0RvY3VtZW50cy9HaXRSb290L1Rhc2tUcmFja2VyL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDcEMsb0VBQW9FO0FBQ3BFLHFFQUFxRTtBQUNyRSxXQUFXO0FBQ1gsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQztFQUMxQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUN2QyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0VBQzdDLE1BQU0sRUFBRSxVQUFVO0FBQ3BCLENBQUMsQ0FBQyxDQUFDOztBQUVILGtCQUFrQjtBQUNsQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxZQUFZLENBQUM7RUFDeEQsRUFBRSxFQUFFLFlBQVk7RUFDaEIsS0FBSyxFQUFFLFlBQVk7RUFDbkIsSUFBSSxFQUFFO0lBQ0osSUFBSSxFQUFFLHNCQUFzQjtJQUM1QixJQUFJLEVBQUUsc0JBQXNCO0lBQzVCLElBQUksRUFBRSxzQkFBc0I7R0FDN0I7RUFDRCxRQUFRLEVBQUUsWUFBWTtBQUN4QixDQUFDLENBQUMsQ0FBQzs7QUFFSCxTQUFTLFlBQVksQ0FBQyxLQUFLLEVBQUU7RUFDM0IsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO0lBQ2pCLFVBQVUsQ0FBQyxJQUFJLENBQUM7TUFDZCxRQUFRLEVBQUUsTUFBTTtLQUNqQixDQUFDLENBQUM7R0FDSjtBQUNILENBQUM7O0FBRUQsU0FBUyxVQUFVLEdBQUc7RUFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMzQyxDQUFDOztBQUVELHdEQUF3RDtBQUN4RCwrREFBK0Q7QUFDL0QsV0FBVztBQUNYLGlFQUFpRTtBQUNqRSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxJQUFJLEVBQUU7RUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNsQixVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDbkIsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBkYXRhID0gcmVxdWlyZShcInNkay9zZWxmXCIpLmRhdGE7XG4vLyBDb25zdHJ1Y3QgYSBwYW5lbCwgbG9hZGluZyBpdHMgY29udGVudCBmcm9tIHRoZSBcInRleHQtZW50cnkuaHRtbFwiXG4vLyBmaWxlIGluIHRoZSBcImRhdGFcIiBkaXJlY3RvcnksIGFuZCBsb2FkaW5nIHRoZSBcImdldC10ZXh0LmpzXCIgc2NyaXB0XG4vLyBpbnRvIGl0LlxudmFyIHRleHRfZW50cnkgPSByZXF1aXJlKFwic2RrL3BhbmVsXCIpLlBhbmVsKHtcbiAgY29udGVudFVSTDogZGF0YS51cmwoXCJ0ZXh0LWVudHJ5Lmh0bWxcIiksXG4gIGNvbnRlbnRTY3JpcHRGaWxlOiBkYXRhLnVybChcImpzL2dldC10ZXh0LmpzXCIpLFxuICBvbkhpZGU6IGhhbmRsZUhpZGVcbn0pO1xuXG4vLyBDcmVhdGUgYSBidXR0b25cbnZhciBidXR0b24gPSByZXF1aXJlKFwic2RrL3VpL2J1dHRvbi90b2dnbGVcIikuVG9nZ2xlQnV0dG9uKHtcbiAgaWQ6IFwic2hvdy1wYW5lbFwiLFxuICBsYWJlbDogXCJTaG93IFBhbmVsXCIsXG4gIGljb246IHtcbiAgICBcIjE2XCI6IFwiLi9pbWFnZXMvaWNvbi0xNi5wbmdcIixcbiAgICBcIjMyXCI6IFwiLi9pbWFnZXMvaWNvbi0zMi5wbmdcIixcbiAgICBcIjY0XCI6IFwiLi9pbWFnZXMvaWNvbi02NC5wbmdcIlxuICB9LFxuICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlXG59KTtcblxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5jaGVja2VkKSB7XG4gICAgdGV4dF9lbnRyeS5zaG93KHtcbiAgICAgIHBvc2l0aW9uOiBidXR0b25cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVIaWRlKCkge1xuICBidXR0b24uc3RhdGUoJ3dpbmRvdycsIHtjaGVja2VkOiBmYWxzZX0pO1xufVxuXG4vLyBMaXN0ZW4gZm9yIG1lc3NhZ2VzIGNhbGxlZCBcInRleHQtZW50ZXJlZFwiIGNvbWluZyBmcm9tXG4vLyB0aGUgY29udGVudCBzY3JpcHQuIFRoZSBtZXNzYWdlIHBheWxvYWQgaXMgdGhlIHRleHQgdGhlIHVzZXJcbi8vIGVudGVyZWQuXG4vLyBJbiB0aGlzIGltcGxlbWVudGF0aW9uIHdlJ2xsIGp1c3QgbG9nIHRoZSB0ZXh0IHRvIHRoZSBjb25zb2xlLlxudGV4dF9lbnRyeS5wb3J0Lm9uKFwidGV4dC1lbnRlcmVkXCIsIGZ1bmN0aW9uICh0ZXh0KSB7XG4gIGNvbnNvbGUubG9nKHRleHQpO1xuICB0ZXh0X2VudHJ5LmhpZGUoKTtcbn0pO1xuIl19
