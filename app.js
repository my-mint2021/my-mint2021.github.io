let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#fff"
tg.MainButton.color = "#1df83a";


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
const buttonsP = document.querySelectorAll('.btn-p');
const categ = document.querySelectorAll('.categ');
const main = document.querySelector('.main');
const backButton = document.querySelectorAll('.back');
const backProdButton = document.querySelectorAll('.back-prod');
const prod = document.querySelectorAll('.product');


// выбор категории товара
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('hello');
        const target = button.dataset.target;
        categ.forEach(categ => {
            if (categ.id === target) {
                categ.style.display = 'block';
            } else {
                categ.style.display = 'none';
            }
        });
        main.style.display = 'none';
    });
});


// выбор товара
buttonsP.forEach(button => {
    button.addEventListener('click', () => {
        console.log('buy');
        const target = button.dataset.target;
        const categP = document.querySelector('.categ');

        prod.forEach(prod => {
            if (prod.id === target) {
                prod.style.display = 'block';
                categP.style.display = 'none';
            } else {
                prod.style.display = 'none';
            }
        });
    });
});
// кнопка назад из категории на главную
backButton.forEach(button => {
    button.addEventListener('click', () => {
        main.style.display = 'block';
        categ.forEach(block => {
            block.style.display = 'none';
        });
    });
});

// кнопка назад из продукта
  backProdButton.forEach(button => {
    button.addEventListener('click', () => {
      main.style.display = 'none';
      categ.forEach(block => {
        block.style.display = 'block';
      });
    });
  });


// кнопка назад из продукта
// backProdButton.forEach(button => {
//     button.addEventListener('click', () => {
//         const target = button.dataset.target;
//         // prod.style.display = 'none';
//         categ.forEach(categ => {
//             if (categ.id === target) {
//                 console.log('target');
//                 categ.style.display = 'none';

//             } else {
//                 categ.style.display = 'none';
//             }
//         });

//         categ.forEach(block => {
//             block.style.display = 'block';
//         });
//     });
// });