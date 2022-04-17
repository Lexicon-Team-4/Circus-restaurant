
// CAROUSEL SLIDING IMAGES SIZE
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// automatically scale carousel sliding images so that they
// will cover the whole visible area of the browser and thus
// make the user experience a lot better

// get all of the carousel images by finding a child with
// className img within ancestor with a className carousel-inner
let carouselImages = $('.carousel-inner').find('img');

// get the number of slides in home-page carousel
// equal to the length of the carouselImages array
let numSlides = carouselImages.length;

// a simple for-loop to get the job done 
for (let i=0; i<numSlides; i++) {
  carouselImages[i].style.height = window.innerHeight + "px";
}


// CAROUSEL DURATION
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Change duration of the carousel
$('.carousel').carousel({
  interval: 7000, // 7s
  pause: false
})