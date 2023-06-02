var tgLink = document.getElementById('link');
tgLink.addEventListener('click', function(event) {
  event.preventDefault();
  var url = tgLink.getAttribute('href');
  window.TelegramWebApp.openUrl('https://my-mint2021.github.io/prod.html');
});