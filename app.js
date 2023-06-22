const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
} 

const buttons = document.querySelectorAll('.btn');
const divs = document.querySelectorAll('.categ');
const main = document.querySelector('.main');
const backButton = document.querySelectorAll('.back');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('hello');
        const target = button.dataset.target;
        divs.forEach(categ => {
            if (categ.id === target) {
                categ.style.display = 'block';
            } else {
                categ.style.display = 'none';
            }
        });
        main.style.display = 'none';
    });
});

backButton.forEach(button => {
    button.addEventListener('click', () => {
      main.style.display = 'block';
      divs.forEach(block => {
        block.style.display = 'none';
      });
    });
  });

let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#fff"
tg.MainButton.color = "#1df83a";