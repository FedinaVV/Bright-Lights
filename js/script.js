 //Burger-menu(jQuery)
 $(document).ready(function(){
    $('.icon-menu').click(function(event){
    $('body, .icon-menu, .menu__body').toggleClass('active');
    });
    });

//Slider(jQuery)
$(document).ready(function(){
   $('.slider').slick({
      arrows: true,
      dots: false,
      //adaptiveHeight: true,
      slidesToShow: 3,
      responsive: [
         {
            breakpoint: 992,
            settings:{
               slidesToShow: 1,
            }
         }
      ]
   });
});

//Player(js)

let btnPlay = document.querySelector("#playBtn"); 
let audio = document.getElementById("audio");   
let time = document.querySelector(".time");
let isMusicPlay = false;

btnPlay.addEventListener("click", function() {
   isMusicPlay = !isMusicPlay;
   if (isMusicPlay == true){
   audio.play();

   audioPlay = setInterval(function() {
     
       let audioTime = Math.round(audio.currentTime);
           let audioLength = Math.round(audio.duration)
           time.style.width = (audioTime * 100) / audioLength + '%';

   }, 10)

   btnPlay.classList.remove("play");
   btnPlay.classList.add("pause");
}

   if (isMusicPlay == false){
      btnPlay.classList.remove("pause");
   btnPlay.classList.add("play");
      audio.pause(); 
      clearInterval(audioPlay);
   } 
   
});

