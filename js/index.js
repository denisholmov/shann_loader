"use strict";
const loaderFront = document.querySelector(".loader__front");
const loaderBack = document.querySelector(".loader__back");


const loaderBtn1 = document.querySelector(".loader__btn-item_1");
const loaderBtn2 = document.querySelector(".loader__btn-item_2");
const loaderBtn3 = document.querySelector(".loader__btn-item_3");
const loaderBtn4 = document.querySelector(".loader__btn-item_4");

const loaderInf = document.querySelector(".loader__inf");

loaderBtn1.addEventListener("mouseenter", ()=>{
	loaderFront.innerHTML = "<img src='./images/loader-front-top.png' alt=''>";
})

loaderBtn1.addEventListener("mouseout", ()=>{
	loaderFront.innerHTML = "<img src='./images/loader-front.png' alt=''>";
})



loaderBtn3.addEventListener("mouseenter", ()=>{
	loaderBack.innerHTML = "<img src='./images/loader-back-top.png' alt=''>";
	loaderInf.classList.add("active");
})

loaderBtn3.addEventListener("mouseout", ()=>{
	loaderBack.innerHTML = "<img src='./images/loader-back.png' alt=''>";
	loaderInf.classList.remove("active");
})

loaderBtn4.addEventListener("mouseenter", ()=>{
	loaderBack.innerHTML = "<img src='./images/loader-back-bottom.png' alt=''>";
})

loaderBtn4.addEventListener("mouseout", ()=>{
	loaderBack.innerHTML = "<img src='./images/loader-back.png' alt=''>";
})





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


