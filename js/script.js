$(document).ready(function(){
    $('a[href="#sheldure"], .main_btna, .main_btn').click(function(){
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);
    });
    
    $('.close').click(function(){
        $('.overlay').fadeOut(1000);
        $('.modal').slideUp(1000);
    });
});