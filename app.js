// получаем ссылку на кнопку
const linkButton = document.getElementById('link');

// добавляем обработчик события нажатия на кнопку
linkButton.addEventListener('click', () => {
  // вызываем функцию TelegramWebviewProxy для открытия ссылки внутри бота
  window.TelegramWebviewProxy('https://my-mint2021.github.io/prod.html');
});
