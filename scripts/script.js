const navbarToggle = document.getElementById('navbarToggle');
const logo2 = document.getElementById('logo2')
const navbar = document.getElementById('navbar');


navbarToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    logo2.classList.toggle('notActive');
});