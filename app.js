// ADD TO CART

let productCountEl = document.getElementById("product-count");
let addToCartButtons = document.querySelectorAll(".add-to-cart");


for (let i=0; i<addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click",function(){
		// let prevProductCount = +productCountEl.textContent;
		// productCountEl.textContent = prevProductCount + 1; 
		// ili 2 variant
		 productCountEl.textContent = +productCountEl.textContent + 1;
	})
}
// slick slider
$('.slick').slick({
	dots:true,
})
// changed like
let addToWishList = document.querySelectorAll(".heart");
console.log(addToWishList)
for (let i=0; i<addToWishList.length; i++) {
	addToWishList[i].addEventListener("click",function(){
		if (addToWishList[i].classList.contains('liked')) {
			addToWishList[i].classList.remove('liked')
		} else{
			addToWishList[i].classList.add('liked')
		}
	})
}

// product-quantity
function disabledDecrement(count){
	if(count<=1){
 			decrementButton.disabled = true;
 		} else if(count>=10) {
 			incrementButton.disabled = true;
 		}

 		else{
 			decrementButton.disabled = false;
 			incrementButton.disabled = false;
 		}

}

let decrementButton = document.querySelectorAll(".decrement-button")[8];
let incrementButton = document.querySelectorAll(".increment-button")[8];
let productQuantityInput = document.querySelectorAll(".product-quantity-input")[8];


 incrementButton.addEventListener("click",function(){
 		let currentValue = +productQuantityInput.value;
 		let nextValue = currentValue + 1;
 		productQuantityInput.value = nextValue;

 		disabledDecrement(nextValue)

 })

 decrementButton.addEventListener("click",function(){
 		let currentValue = +productQuantityInput.value;
 		let nextValue = currentValue - 1;
 		productQuantityInput.value = nextValue;

 		disabledDecrement(nextValue)
 })


$(".select").css("background-color", "#2c71b8");
$(".select").css("color", "white");
$(".select option").css("background-color", "#2c71b8");
$(".select option").css("color", "white");