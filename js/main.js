let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');

    var btnUp = document.querySelector(".btn-up");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
