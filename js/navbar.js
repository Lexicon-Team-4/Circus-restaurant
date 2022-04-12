// get the variables from the main document
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks  = document.getElementsByClassName('navbar-links')[0]
const barTop     = document.getElementsByClassName('bar')[0]
const barMiddle  = document.getElementsByClassName('bar')[1]
const barBottom  = document.getElementsByClassName('bar')[2]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  barTop.classList.toggle('activeTop')
  barMiddle.classList.toggle('activeMiddle')
  barBottom.classList.toggle('activeBottom')
})

