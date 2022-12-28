const slider = document.querySelectorAll(".slider");
const balls = document.querySelectorAll("#slideB");
const btnPrev = document.querySelector("#prev-button");
const btnNext = document.querySelector("#next-button");
const ballsClick = document.querySelector('.balls-click');
const navigation = document.querySelector('.conect-ball');

const links = document.querySelectorAll(".linkImg");
const link = document.querySelector("links");

let currentSlider = 0;
let lenBalls = balls.length;



function returIdx(){
    for(let i = 0; i < lenBalls; i++){
        if(balls[i].checked){
            hideSlider();
            linksIndexRem();

            currentSlider = i;
            showSlider();
            linksIndexAdd();
        }
    }    
}

function checkedBalls(){
    balls[currentSlider].checked = true;
}

function linksIndexRem(){
    links.forEach(item => item.classList.remove("too"));

}

function linksIndexAdd(){
    links[currentSlider].classList.add("too");
}

function hideSlider(){
    slider.forEach(item => item.classList.remove("on"));
}

function showSlider(){
    slider[currentSlider].classList.add("on");
}

function attSlideNext(){
    if(currentSlider === slider.length - 1){
        currentSlider = 0;
    } else {
        currentSlider++;
    }
    checkedBalls();
}

function nextSlider(){
    hideSlider();
    linksIndexRem();

    attSlideNext();

    showSlider();
    linksIndexAdd();
}

function attSlidePrev(){
    if(currentSlider === 0){
        currentSlider = slider.length - 1;
    } else {
        currentSlider--;
    }
    checkedBalls();
}

function prevSlider(){
    hideSlider();
    linksIndexRem();

    attSlidePrev();

    showSlider();
    linksIndexAdd();
}

setInterval(nextSlider, 5000);

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)
ballsClick.addEventListener('click', returIdx)








