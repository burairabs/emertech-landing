/* 
Author:	Burair Abbas
Website : Emertech	
*/

// Typing animation
let textType = document.querySelector('.typeing')
let textArray = textType.dataset.typeingtext.split("")
let typeCount = 0;

let autoTypeText = () => {
    if(typeCount < textType.dataset.typeingtext.length){
        textType.innerHTML += textType.dataset.typeingtext.charAt(typeCount)
        typeCount++
        textArray = textType.dataset.typeingtext.split("")
    }
    // else {
    //     textArray.pop()
    //     textType.innerHTML = textArray.join("")
    //     if(textArray.length == 0){
    //         typeCount = 0
    //     }
    // }  
}
setInterval(() => {
    autoTypeText()
},150)

// Fixed header
$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('.navbar').addClass('fixed-header');
    }
    else {
        $('.navbar').removeClass('fixed-header');
    }
});

