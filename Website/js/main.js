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


// =================== REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.navLink')

function linkAction (){
 const navMenu = document.getElementById('navMenu')
 navMenu.classList.remove('showMenu')
}

navLink.forEach (n => n.addEventListener('click', linkAction))



// =================== ACCORDION SKILLS ==================

const skillsContent = document.getElementsByClassName('skillsContent')
const skillsHeader =document.querySelectorAll('.skillsHeader')

function toggleSkills(){
 let itemClass = this.parentNode.className

for (i = 0; i < skillsContent.length; i++){
 skillsContent[i].className = 'skillsContent skillsClose'
}
if (itemClass === 'skillsContent skillsClose'){
 this.parentNode.className = 'skillsContent skillsOpen'
}

}

skillsHeader.forEach((el) => {
 el.addEventListener('click', toggleSkills)
})





const modalViews = document.querySelectorAll('.servicesModal')
const modalButtons = document.querySelectorAll('.servicesButton')
const modalCloses = document.querySelectorAll('.services-modal-close')

let modal = function (modalClick){
 modalViews[modalClick].classList.add('activeModal')
}


modalButtons.forEach((modalButton, i) => {
 modalButton.addEventListener('click', () => {
  modal(i)
 } )

})

modalCloses.forEach((modalClose) => {
 modalClose.addEventListener('click', () => {
  modalViews.forEach((modalView) => {
   modalView.classList.remove('activeModal')
  })
 })
})