let search=document.querySelector('.search');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove("active");
}

let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

let navbar=document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
};

window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}