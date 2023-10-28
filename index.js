var addProductBtn=document.getElementById("add-product-btn")
var productPriceElement=document.getElementById("product-price")
var productNameElement=document.getElementById("product-name")
var productWrapperElement=document.getElementById("product-wrapper")

let products=JSON.parse(localStorage.getItem("products"))
if(products!=null){
products.map((product,i)=>{
    productWrapperElement.innerHTML+=`
    <div class="product-card"> 
    <P>product name: ${product.productName}</P>
    <p>product price:${product.productPrice}</p>
    <button onclick="removeProduct(${i})">Remove Product</button>
    <br />
    <button onclick="addToCart(${i})">Add to cart</button>

    
</div> 
`
})
}
function addToCart(productIndex){
    let productToBeAddedToCart=products[productIndex]
   if(localStorage.getItem("cartProducts")== null){
     let cartProducts=[]
     cartProducts.push(productToBeAddedToCart)
     localStorage.setItem("cartProducts",JSON.stringify(cartProducts))
   }else{
    let productFromCartProducts =JSON.parse(localStorage.getItem("cartProducts"));
    productFromCartProducts.push(productToBeAddedToCart) 
    localStorage.setItem("cartProducts",JSON.stringify(productFromCartProducts))
   }
}
function removeProduct(productIndex){
    let productsFromLocalStorage=JSON.parse(localStorage.getItem("products"));
    productsFromLocalStorage.splice(productIndex,1)
    localStorage.setItem("products",JSON.stringify( productsFromLocalStorage))

    location.reload()
    

}




//  <div class="product-card"> <P>product name: Shirt</P>
//         <p>product price: 700</p>
//         <button>Add to cart</button>
//     </div> 
   
addProductBtn.addEventListener("click",function(){
    if(localStorage.getItem("products")==null){
        let products=[]
        let productObj={
            productName:productNameElement.value,
            productPrice:productPriceElement.value
        }
        products.push( productObj);
        localStorage.setItem("products",JSON.stringify(products))
        location.reload()
    }else{
        let productObj={
            productName:productNameElement.value,
            productPrice:productPriceElement.value
        }
        let productsFromLocalStorage=JSON.parse(localStorage.getItem("products"));
        productsFromLocalStorage.push(productObj)
        localStorage.setItem("products",JSON.stringify( productsFromLocalStorage))
        location.reload()


    }
})