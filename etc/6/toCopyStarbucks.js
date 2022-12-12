let mainText = document.querySelector('.mainText');

window.addEventListener('scroll', function(){
    let value = window.scrollY
    console.log("scrollY", value)

    if(value > 300){
        mainText.style.animation='back_textSlide 1s ease-out forwards';
    } else {
        mainText.style.animation = 'textSlide 1s ease-in-out'
    }
});
