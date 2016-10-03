(function($){
  $(function(){

    toggleSlide();

    $('.header').on('click', checkClass);

    function toggleSlide(){
      $('.active').next().slideDown();
      $('.not-active').next().slideUp();
    }

    function checkClass(){
      $('.active').removeClass('active').addClass('not-active');

      if($(this).hasClass('not-active')){
        $(this).removeClass('not-active');
        $(this).addClass('active');
      }

      toggleSlide();
    }





  });
}(jQuery));
