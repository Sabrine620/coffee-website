
"use strict"

let links = document.querySelector('.links')
let btnClose = document.querySelector('.close')
let bars = document.querySelector('.bars')

btnClose.addEventListener('click', function(){
    links.classList.add('hidden')
    bars.classList.remove('hidden')
    btnClose .classList.add('hidden');
})
bars.addEventListener("click", function(){
    links.classList.remove('hidden');
    bars.classList.add('hidden');
    btnClose .classList.remove('hidden');
    
})