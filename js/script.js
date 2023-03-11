"use strict";

let coutValue = document.querySelector('.cout-cart');
let box_product = document.querySelectorAll('.img-product');
box_product.forEach(item => {
    item.addEventListener('click', function() {
        let cout = +coutValue.innerHTML
        if(true) {
            cout++;
            coutValue.innerHTML = cout;
        }
    })
});

let burger_menu = document.querySelector('.header-burger-menu');
let btn_burger = document.querySelector('.burger-menu');
let burger = document.querySelectorAll('.burger');
btn_burger.addEventListener('click', function() {
    burger.forEach(item => {
        if(!item.classList.contains('active')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    if(!burger_menu.classList.contains('active')) {
        burger_menu.classList.add('active')
    } else {
        burger_menu.classList.remove('active');
    }
})