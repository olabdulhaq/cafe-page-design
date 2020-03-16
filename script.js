const hamburgerBtn = document.querySelector('.hamburgerBtn');
const navBar = document.querySelector('.navBar');

hamburgerBtn.addEventListener('click', () => {
    navBar.classList.toggle('open')
});