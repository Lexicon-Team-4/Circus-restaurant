// get the variables from the main document
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks  = document.getElementsByClassName('navbar-links')[0]
const bar = document.getElementsByClassName('bar')

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  bar[0].classList.toggle('active-top')
  bar[1].classList.toggle('active-middle')
  bar[2].classList.toggle('active-bottom')
})

