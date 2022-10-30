const body = document.getElementById('myBody')
const imgLogo = document.querySelector('#imageLogo')
const sideMenu = document.querySelector('aside')
const menu = document.getElementById('menu-btn')
const close = document.getElementById('close-btn')
const themeToggle = document.querySelector('.theme-toggle')
const lightToggle = document.getElementById('light')
const darkToggle = document.getElementById('dark')

window.addEventListener('load', (e) => {
 
 // localStorage.setItem('theme', null );
 let theme = sessionStorage.getItem('theme');
 console.log(theme == "light")
 if ( theme == null || theme == "light") {
  imgLogo.src = "./assets/logo-dark.png"
  lightToggle.classList.add('active')
  darkToggle.classList.remove('active')
 } else {
  imgLogo.src = "./assets/logo-light.png"
  body.classList.toggle('dark-theme')
  darkToggle.classList.add('active')
  lightToggle.classList.remove('active')
 }
} )

// window.addEventListener('load', (e) => {
//  body. = 'var(--bg-color)'
//  if (bg.style.background != 'var(--bg-color)' ) {
//   imgLogo.src = "./assets/logo-light.png" 
//  } else {
//   imgLogo.src = "./assets/logo-dark.png";

//   console.log(bg.style.background)
//  }
// } )

menu.addEventListener('click', () => {

 sideMenu.style.left = "0"
 sideMenu.style.opacity = "1"
 sideMenu.style.visibility = "visible"
} )


close.addEventListener('click', () => {
 sideMenu.style.left = "-100%"
 sideMenu.style.opacity = "0"
 sideMenu.style.visibility = "hidden"
} )

themeToggle.addEventListener('click', () => {
let currentMode = sessionStorage.getItem('theme')
body.classList.toggle('dark-theme')
themeToggle.querySelector('span').classList.toggle('active')


if ( currentMode == null ||currentMode == "light") {
 darkToggle.classList.add('active')
 lightToggle.classList.remove('active')
 sessionStorage.setItem('theme', 'dark')  
 imgLogo.src = "./assets/logo-light.png"

 
} else {
 lightToggle.classList.add('active')
 darkToggle.classList.remove('active')
 sessionStorage.setItem('theme', 'light')
 imgLogo.src = "./assets/logo-dark.png"

}


} )


