var $ = require('../jquery/dist/jquery.min.js');

var form = document.getElementById("input-form");
form.addEventListener("submit", function() {
  self.postMessage(document.getElementById("code").value);
  return false;
});

$(document).ready(function() {
    $('form:first *:input[type!=hidden]:first').focus();
});
