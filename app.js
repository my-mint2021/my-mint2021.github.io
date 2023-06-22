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