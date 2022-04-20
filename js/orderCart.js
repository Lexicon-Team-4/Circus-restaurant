// This javascript file will:

// ** add menu item to the cart once we click on button 'Add to cart',

// ** give us an allert if we try to add one item several
//    times by clicking to the button 'Add to cart',

// ** update the total price of the order once we either:
//     o  increase/decrease the amount of added item within the cart,
//     o  remove the item from the cart,

// ** give us an allert message once we click to the button 'Make an order'

// ** clean the cart once we click to the button 'Make an order'


// Let's get to work :)



// get objects for cartIcon, cart and cartClose
let cartIcon  = document.querySelector("#cart-icon")
let cart      = document.querySelector('.shopping-cart')
let cartClose = document.querySelector('#close-cart')

// arrow function to open the cart by adding "active" class to the classList
// there are other ways how to do it, for instance by toggling the
// active class and using the same button to open and close the cart div,
// similar as we did for the hamburger menu button. This approach, however,
// feels more natural, to me at least.
cartIcon.onclick = () => {
  cart.classList.add("active")
  updateCart()
}

// arrow function to close the cart by removing "active" from the classList
cartClose.onclick = () => {
  cart.classList.remove("active")
}

// wait untill the document is loaded and then execute the function updateCart()
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", updateCart);
} else {
  updateCart();
}

// define function updateCart()
// add eventListener to each button in our order cart, so that once
// it is clicked, it will remove an item from the cart
// loop over all elements with class name "cart-remove"
function updateCart() {
  var removeCartButtons = document.getElementsByClassName("cart-remove")

  for (let i = 0; i < removeCartButtons.length; i++) {
    let button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem)
  }

  // update quantity change
  var quantityInputs = document.getElementsByClassName('cart-quantity')
  for (let i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }
  
  // add items to the cart
  var addToCart = document.getElementsByClassName('add-to-cart-btn')
  for (let i = 0; i < addToCart.length; i++){
    var button = addToCart[i]
    button.addEventListener('click', addItem)
  }
}


// define a function which will add items to the cart
function addItem(event) {
  var button       = event.target
  var shopProducts = button.parentElement
  
  // first define price, image and title for the menu card on which we click
  var title = shopProducts.getElementsByClassName('item-title')[0].innerText
  var image = shopProducts.getElementsByClassName('menu__item-image')[0].children[0].src
  var price = shopProducts.getElementsByClassName('item-price')[0].innerText.replace("\:-","")
  
  // pass those 3 variables to a new function
  addMenuItemToCart(title, image, price);
  updateTotalPrice();
}


// the following function wil actually add an item to the order cart.
// if the item is already added, it will give alert.
function addMenuItemToCart(title, image, price) {
  var cartMenuBox = document.createElement('div');
  cartMenuBox.classList.add('cart-box');
  
  var cartItems      = document.getElementsByClassName('cart-content')[0]
  // var cartItemsNames = document.getElementsByClassName('cart-product-title')
  
  var elements = document.getElementsByClassName('cart-product-title'), innerHTMLs = [];
  for (let i = 0; i < elements.length; ++i) {
    
    // check if item in cart box,
    // if so, alert and return.
    if (elements[i].innerHTML == title) {
      alert("You have already added " + title + " to the cart.")
      return ;
    }
  }
  
  // define a div content that we will add to the cart
  var cartBoxContent = `<img src="${image}" class="cart-img">
                        <div class="detail-box">
                          <div class="cart-product-title">${title}</div>
                          <div class="cart-price">${price}:-</div>
                          <input type="number" value="1" class="cart-quantity">
                        </div>
                        <ion-icon name="trash-outline" class="cart-remove"></ion-icon>`;
  cartMenuBox.innerHTML = cartBoxContent
  cartItems.append(cartMenuBox)
  
  cartMenuBox.getElementsByClassName('cart-remove')[0]
             .addEventListener('click', removeCartItem);
  cartMenuBox.getElementsByClassName('cart-quantity')[0]
             .addEventListener('change', quantityChanged);
}



// define a function which will remove items from the cart
function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.remove();
  updateTotalPrice();
}

// define a function which will update the change in quantity of
// the selected menu item
function quantityChanged(event) {
  var input = event.target;
  // check if less than or equal to zero, if, then make it equal to 1
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updateTotalPrice();
}


// define a function that will update the total price,
// it will also update total number of items in the cart
function updateTotalPrice() {
  var cartContent = document.getElementsByClassName('cart-content')[0]
  var cartItems   = cartContent.getElementsByClassName('cart-box')
  var total       = 0
  var totalItems  = 0
  
  for (let i = 0; i < cartItems.length; i++) {
    var cartItem     = cartItems[i]
    var priceItem    = cartItem.getElementsByClassName('cart-price')[0]
    var quantityItem = cartItem.getElementsByClassName('cart-quantity')[0]
    
    var quantity = Number(quantityItem.value)
    totalItems  += quantity
    var price    = parseFloat(priceItem.innerHTML.replace(":-", ""))
    total       += quantity * price
    total        = Math.round(total * 100) / 100
  }
  
  // update total price
  document.getElementsByClassName('total-price')[0].innerText = total + " SEK"

  // update total number of items in the cart
  document.getElementsByClassName('items-in-cart')[0].innerText = totalItems
}
