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


