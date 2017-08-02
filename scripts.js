$(document).ready(function() {
  $(this).find('p.contact').fadeIn('4000');
  $(this).find('h1').fadeIn('6000');
  $('.disappear').on('click', function() {
    $('.submit').css('display', 'none')
    $('.thanks').css('display', 'block')
  })

})
