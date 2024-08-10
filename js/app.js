
const menu = document.querySelector('.nav__links');
const amburguesa = document.querySelector('.nav__burger');


amburguesa.addEventListener('click', ()=> {

menu.classList.toggle('nav__links--visible');

});