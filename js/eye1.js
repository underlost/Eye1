$(document).ready(function() {
  $("#logo").lettering();
  
  $("body").bind("click", function (e) {
    $('.dropdown-toggle, .menu').parent("li").removeClass("open");
  });
  $(".dropdown-toggle, .menu").click(function (e) {
    var $li = $(this).parent("li").toggleClass('open');
    return false;
  });
  
$('.carousel').carousel({
  interval: 5000
})

});
