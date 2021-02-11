const menu = document.querySelector('#mobile-menu')
const menuList = document.querySelector('.navbar__menu')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuList.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)