const bg = document.querySelector('body');
const imgLogo = document.querySelector('#imageLogo');

window.addEventListener('load', (e) => {
 bg.style.background = 'var(--bg-color)'
 if (bg.style.background != 'var(--bg-color)' ) {
  imgLogo.src = "./assets/logo-light.png" 
 } else {
  imgLogo.src = "./assets/logo-dark.png";

  console.log(bg.style.background)
 }
} )


