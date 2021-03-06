"use strict"
var navheader = document.getElementById('hamburgerMenu');
var navDrop = document.getElementById('menuitem');
var navSpanM = document.getElementById('m');
var navSpanNU = document.getElementById('nu');
var isSlided = false;

var slideEffect = function (f){
    
    navheader.classList.toggle("change");
    if(!isSlided){
        navSpanM.innerHTML = 'E';
        navSpanNU.innerHTML = 'IT';
        navDrop.style.left = '0';
        isSlided = true;
    }else if(isSlided){
        navDrop.style.left = '-100vw';
        navSpanM.innerHTML = 'M';
        navSpanNU.innerHTML = 'NU';
        isSlided = false;
    }
}