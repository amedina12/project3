$(document).ready(function(){
    $('.next').on('click', function(){
       var currentImg = $('.active');
       var nextImage = currentImg.next();
 
       if(nextImage.length){
           currentImg.removeClass('active').css('z-index', -10);
           nextImage.addClass('active').css('z-index', 10);
       }
    });
 
     $('.prev').on('click', function(){
         var currentImg = $('.active');
         var prevImage = currentImg.prev();
 
         if(prevImage.length){
             currentImg.removeClass('active').css('z-index', -10);
             prevImage.addClass('active').css('z-index', 10);
         }
     });
 });