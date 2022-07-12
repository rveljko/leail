const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const sideBar = document.getElementById('sideBar');
const faqContainers = document.querySelectorAll('.faq__container');


const closingMenu = () => {
    sideBar.classList.remove('open');
    document.body.classList.remove('noscroll');
    sideBar.classList.add('close');
}

const openingMenu = () => {
    sideBar.classList.remove('close');
    document.body.classList.add('noscroll');
    sideBar.classList.add('open');
}

openMenu.addEventListener('click', openingMenu);
closeMenu.addEventListener('click', closingMenu);
faqContainers.forEach(faqContainer => {
    faqContainer.addEventListener('click', () => {
        faqContainer.classList.toggle('activefaq');
    });
});