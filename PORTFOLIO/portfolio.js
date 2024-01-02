burger = document.querySelector('.burger');
navList = document.querySelector('.nav-list');
navbar = document.querySelector('.navbar');
burger.addEventListener('click' , ()=>{
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})