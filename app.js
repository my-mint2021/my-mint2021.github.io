var tgLink = document.getElementById('link');
tgLink.addEventListener('click', function(event) {
  event.preventDefault();
  var url = tgLink.getAttribute('href');
  window.TelegramWebApp.openUrl(url);
});