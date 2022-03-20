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
               slidesToShow: 2,
            }
         }, 
         {
            breakpoint: 720,
            settings:{
               slidesToShow: 1,
            }
         }
      ]
      
   });
});

//Player in main(js)

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


//Player in tracks(js)


let btnPlayMusicPlayer = document.querySelector("#playBtn2"); 
let audio2 = document.getElementById("track-audio");   
let time2 = document.querySelector(".time-tracks");
let isMusicPlay2 = false;

let track1 = document.querySelector("#track1"); 
let track2 = document.querySelector("#track2"); 
let track3 = document.querySelector("#track3"); 
let track4 = document.querySelector("#track4"); 
let track5 = document.querySelector("#track5"); 
let track6 = document.querySelector("#track6"); 


track1.addEventListener("click", function() {
      musicPlayer('audio/Billie_eilish_bad_guy.mp3');
      //track1.classList.toggle("active");
});
track2.addEventListener("click", function() {
   musicPlayer('audio/Daft Punk - Get Lucky.mp3');
   //track2.classList.toggle("active");
});
track3.addEventListener("click", function() {
   musicPlayer('audio/Radiohead - Jigsaw Falling Into Place.mp3');
   //track3.classList.toggle("active");
  
});
track4.addEventListener("click", function() {
   musicPlayer('audio/System of A Down - Chop Suey.mp3');
   //track4.classList.toggle("active");
});
track5.addEventListener("click", function() {
   musicPlayer('audio/the-prodigy-the-day-is-my-enemy.mp3');
   //track5.classList.toggle("active");
});
track6.addEventListener("click", function() {
   musicPlayer('audio/Twenty One Pilots - Stressed Out.mp3');
   //track6.classList.toggle("active");
});

/*let activeTrackMap = new Map();
activeTrackMap.set('audio/Billie_eilish_bad_guy.mp3' , false);
activeTrackMap.set('audio/Daft Punk - Get Lucky.mp3' , false);
activeTrackMap.set('audio/Radiohead - Jigsaw Falling Into Place.mp3' , false);
activeTrackMap.set('audio/System of A Down - Chop Suey.mp3' , false);
activeTrackMap.set('audio/the-prodigy-the-day-is-my-enemy.mp3' , false);
activeTrackMap.set('audio/Twenty One Pilots - Stressed Out.mp3' , false);
*/


btnPlayMusicPlayer.addEventListener("click", function() {
   isMusicPlay2 = !isMusicPlay2;
   if (isMusicPlay2 == true){
      
         audio2.play();

         audioPlay2 = setInterval(function() {
     
            let audioTime = Math.round(audio2.currentTime);
                let audioLength = Math.round(audio2.duration)
                time2.style.width = (audioTime * 100) / audioLength + '%';
     
        }, 10) 
         
   }
   btnPlayMusicPlayer.classList.remove("play");
   btnPlayMusicPlayer.classList.add("pause");
   if (isMusicPlay2 == false){
      btnPlayMusicPlayer.classList.remove("pause");
   btnPlayMusicPlayer.classList.add("play");
      audio2.pause(); 
      clearInterval(audioPlay2);
   } 
   
});


function musicPlayer(trackPath){
   isMusicPlay2 = true;
  // activeTrackMap.set(trackPath, true);

   if (isMusicPlay2 == true){
   audio2.src = trackPath;

   audio2.play();
   
   audioPlay2 = setInterval(function() {
     
       let audioTime = Math.round(audio2.currentTime);
           let audioLength = Math.round(audio2.duration)
           time2.style.width = (audioTime * 100) / audioLength + '%';

   }, 10) 

   btnPlayMusicPlayer.classList.remove("play");
   btnPlayMusicPlayer.classList.add("pause");
}
}