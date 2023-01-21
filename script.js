const menu = document.querySelector('.hamburger_icon');

const nav = document.querySelector('nav');

const leftLayer = document.querySelector('.left_layer')

menu.addEventListener('click', (e) => {
    e.target.classList.toggle('close');

    nav.classList.toggle('show_nav');
    leftLayer.classList.toggle('show_layer')
})


nav.addEventListener('click', (e) => {
    menu.classList.toggle('close');

    e.target.classList.toggle('show_nav');
    leftLayer.classList.toggle('show_layer')
})