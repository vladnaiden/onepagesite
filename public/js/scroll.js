$(document).ready(function(){
    $('a[href^="#"]').click(function(){ //берем все ссылки атрибу href которых начинается с #
      if(document.getElementById($(this).attr('href').substr(1)) != null) { //на странице есть элемент с нужным нам id
         $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500); // анимируем скролл к элементу
      }     
      return false;
    });
});