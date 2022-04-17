
// EVENT LISTENER TO TOGGLE HAMBURGER MENU BUTTON
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// get the variables from the main document
var toggleButton = document.getElementsByClassName('toggle-button')[0]
var navbarLinks  = document.getElementsByClassName('navbar-links')[0]
var navbarMenu   = document.getElementsByClassName('navbar')[0]
var bar          = document.getElementsByClassName('bar')

// attatch an event listener to the given class
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  bar[0].classList.toggle('active-top')
  bar[1].classList.toggle('active-middle')
  bar[2].classList.toggle('active-bottom')
  navbarMenu.classList.toggle('navbar-active')
})




// RESTAURANT LOGO HOVER
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Change restaurant logo image on hover
$('.logo-img').on('mouseover', function() {
  $(this).attr('src', 'images/peeka-boo-yellow.png');
})

$('.logo-img').on("mouseleave", function () {
  $(this).attr('src', 'images/peeka-boo-logo.png');
});


