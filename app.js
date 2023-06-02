// получаем ссылку на элемент ссылки
const link = document.getElementById('link');

// прикрепляем обработчик событий на ссылку
link.addEventListener('click', (event) => {
  // отменяем стандартное поведение ссылки
  event.preventDefault();

  // открываем новую страницу внутри бота
  window.open('prod.html', '_self');
});