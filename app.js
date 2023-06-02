// Получаем ссылку на элемент <a>
const link = document.getElementById('link');

// Добавляем обработчик события на клик по ссылке
link.addEventListener('click', (event) => {
  // Отменяем действие по умолчанию для ссылки
  event.preventDefault();

  // Получаем адрес ссылки и заменяем http на tg
  const url = event.target.href.replace('http', 'tg');

  // Открываем ссылку внутри бота
  window.open(url, '_self');
});