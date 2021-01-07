$(document).ready(function(){
    $('.header__burger').click(function(){
        $('.header__burger, nav').toggleClass('active');
        $('body').toggleClass('lock')
    });
});