
const menuCel = document.querySelector(".hamburger");
const menuNormal = document.querySelector(".nav-links")

menuCel.addEventListener('click', ()=>{
  menuNormal.classList.toggle('nav-links--show')
})