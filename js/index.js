"use strict";



function addStyleOnResize(){
	let headerBtn = document.querySelector(".header__btn");
	let windowWidth = window.innerWidth;

	if(windowWidth < 768){
		headerBtn.classList.add("header__btn_phone");
		headerBtn.innerHTML = "<img src='./images/phone.svg' alt='Телефон'/>";
		
	} else if(windowWidth >= 768){
		headerBtn.classList.remove("header__btn_phone");
		headerBtn.innerText = "Заказать звонок";
	}
}

window.addEventListener("resize", addStyleOnResize);