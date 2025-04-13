const body = document.getElementById('myBody')
const imgLogo = document.querySelector('#imageLogo')
const sideMenu = document.querySelector('aside')
const menu = document.getElementById('menu-btn')
const close = document.getElementById('close-btn')
const themeToggle = document.querySelector('.theme-toggle')
const lightToggle = document.getElementById('light')
const darkToggle = document.getElementById('dark')
const table = document.querySelector('.table')
const dateInput = document.getElementById('date')
const orders = [
 {
  id: '3689',
  product: 'AMD Ryzen 5 1600',
  payment: 'Due',
  shipping: 'Pending'
 },
 {
  id: '1111',
  product: 'Cooler Master 27" Curved 165hz 1500R ',
  payment: 'Fulfilled',
  shipping: 'Delivered'
 },
 {
  id: '0459',
  product: 'HyperX Cloud Flight Black Wireless',
  payment: 'Due',
  shipping: 'Pending'
 },
 {
  id: '2700',
  product: 'Asrock Radeon RX 6800 XT 16GB DDR6',
  payment: 'Fulfilled',
  shipping: 'Delivered'
 },
 {
  id: '1156',
  product: 'SSD M2 WD 2TB Black SN850X 7300MB/s',
  payment: 'Fulfilled',
  shipping: 'Returned'
 }, {
  id: '3683',
  product: 'AMD Ryzen 5 1600',
  payment: 'Fulfilled',
  shipping: 'Delivered'
 }
]

window.addEventListener('load', (e) => {


 
 // localStorage.setItem('theme', null );
 let theme = sessionStorage.getItem('theme');
 
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

let currentDate = new Date();
dateInput.valueAsDate = currentDate
} )


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

for (order of orders) {


 let productShell = document.createElement('div')
 let idShell = document.createElement('div')
 let paymentShell = document.createElement('div')
 let statusShell = document.createElement('div')

productShell.innerHTML = order.product
idShell.innerHTML = order.id
paymentShell.innerHTML = order.payment
statusShell.innerHTML = order.shipping

if (order.shipping === 'Pending') {
 statusShell.classList.add('pending')
}else if (order.shipping === 'Returned') {
  statusShell.classList.add('returned')
 } else {
  statusShell.classList.add('delivered')
 }

 table.appendChild(productShell)
 table.appendChild(idShell)
 table.appendChild(paymentShell)
 table.appendChild(statusShell)

}






