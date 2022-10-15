let bg = document.querySelector('body');
let imgLogo = document.querySelector('#imageLogo');
console.log(bg.style.background)

window.addEventListener('load', (e) => {
 bg.style.background = 'var(--bg-color)'
 if (bg.style.background == 'var(--bg-color)' ) {
  imgLogo.src = "./assets/logo-dark.png";
 } else {
  imgLogo.src = "./assets/logo-light.png"
  console.log(bg.style.background)
 }
} )