var button = document.getElementById('start-button');

button.addEventListener('click', function() {
  self.port.emit('login');
});
