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

$('.slick').slick({
	dots:true,
})
// heart
// let addToWishList = document.querySelectorAll(".heart");

// if(addToWishList.classList.contains == "heart" )
