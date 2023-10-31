var productWrapperElement = document.getElementById("product-wrapper")
var value = 0;
// var clear = false;
let cartProducts = JSON.parse(localStorage.getItem("cartProducts"))
if (cartProducts != null) {
    cartProducts.map((product, i) => {
        productWrapperElement.innerHTML += `
    <div class="product-card"> 
    <P>product name: ${product.productName}</P>
    <p>product price:${product.productPrice}</p>
    <br />
    <button onclick="removeFromCart(${i})">Remove from cart</button>

    
</div> 
`
        value = parseInt(value) + parseInt(product.productPrice)
    })
}
function removeFromCart(productIndex) {
    let cartProductsFromLocalStorage = JSON.parse(localStorage.getItem("cartProducts"));
    cartProductsFromLocalStorage.splice(productIndex, 1)
    localStorage.setItem("cartProducts", JSON.stringify(cartProductsFromLocalStorage))
    location.reload()
}

function myFunction() {
    alert(`Total Bill = ${value}`);
    clear = true;
    // localStorage.getItem('cartProducts')
    clearAll()
}
  function clearAll(){
  if(clear == true) {
    console.log('coming')
    localStorage.removeItem('cartProducts')
    location.reload()
  }
}