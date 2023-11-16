$(document).ready(function(){
    $('.next').on('click', function(){
        var currentImg = $('.active');
        var nextImage = currentImg.next();

        if(nextImage.length){
            currentImg.removeClass('active');
            nextImage.addClass('active');
        } else {
            currentImg.removeClass('active');
            $('.slider-inner img:first-child').addClass('active');
        }
    });

    $('.prev').on('click', function(){
        var currentImg = $('.active');
        var prevImage = currentImg.prev();

        if(prevImage.length){
            currentImg.removeClass('active');
            prevImage.addClass('active');
        } else {
            currentImg.removeClass('active');
            $('.slider-inner img:last-child').addClass('active');
        }
    });
});
