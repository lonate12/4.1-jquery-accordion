(function($){
  $(function(){
    var $header = $('.header');

    $header.on('click', function(e){
      e.preventDefault();

      if($(this).hasClass('active')){
        $(this).find('ul').slideToggle();
        return false;
      }

      $('.active').find('ul').slideUp();
      $header.removeClass('active');
      $(this).addClass('active');

      // $('ul').css('display', 'block');
      // console.log($('ul').css('display', 'block'));
      $(this).find('ul').slideDown();

    });



  });
}(jQuery));
