$(document)
.ready(function() {

  // fix menu when passed
  $('.masthead')
  .visibility({
    once: false,
    onBottomPassed: function() {
      $('.fixed.menu').transition('fade in');
    },
    onBottomPassedReverse: function() {
      $('.fixed.menu').transition('fade out');
    }
  })
  ;

  // create sidebar and attach to menu open
  $('.ui.sidebar')
  .sidebar('attach events', '.toc.item')
  ;
var a = $('.ui.accordion').accordion({
  onChange: function () {
    $('.shape')
  .shape('set next side', '#' + this.id + '-shape')
  .shape('flip up');
  }
                                    
});

$('.js-email-event').click(function () {
  ga('send', 'event', 'Connection', 'email', 'Header/Footer/Home/About');
});
$('.js-download-event').click(function () {
  console.log("hre");
});
  
});
