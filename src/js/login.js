var form = document.getElementById("input-form");
form.addEventListener("submit", function() {
  self.postMessage(document.getElementById("code").value);
  return false;
});
