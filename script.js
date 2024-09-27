let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");


menu.onclick = () => {
    navbar.classList.toggle ("active");
    menu.classList.toggle ("move");
   
};
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");

cartIcon.onclick = () =>{
    cart.classlist.toggle("active");
 };


let header = document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow', window.scrollY > 0);
});