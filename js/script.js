$(document).ready(function () {
  $('body').on('click', '.burger__btn', function (event) {
    event.preventDefault();
    
    $('.header__bar').hide();
    
    $('.burger__btn').hide();
    
    $('.close__btn').show();
    
    $('.header__menu').slideToggle();
  });
  
  $('body').on('click', '.close__btn', function (event){
    event.preventDefault();
    
    $('.header__bar').show();
    
    $('.burger__btn').show();
    
    $('.close__btn').hide();
    
    $('.header__menu').slideToggle();
  });
});
