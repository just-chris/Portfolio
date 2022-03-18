// ================ MENU HIDE & SHOW ==================

const navMenu = document.getElementById("navMenu")
const navToggle = document.getElementById("navToggle")
const navClose = document.getElementById("navClose")

// =================== MENU SHOW
// =================== VALIDATE IF CONST EXIST


if (navToggle) {
 navToggle.addEventListener('click', () => {
  navMenu.classList.add('showMenu')
 })
}


// =================== MENU HIDDEN
// =================== VALIDATE IF CONST EXIST

if (navClose) {
 navClose.addEventListener('click', () => {
  navMenu.classList.remove('showMenu')
 })
}

