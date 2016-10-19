$(function(){
	$('.cont_scroll').makeScroll();
});

$(document).ready(main);
var contador=1;
function main(){
$('.menu-bar').click(function(){
//$('nav').toggle();
if (contador ==1){
$('nav').animate({
left:'0'
});
contador=0;

  } else {
contador=1;
$('nav').animate({
      left:'-100%'  
    });
  }
})};

/*---------------------acordeon--------------------*/
 $('dl dd').hide();
       $('dl dt').click(function(){
          if ($(this).hasClass('activo')) {
               $(this).removeClass('activo');
               $(this).next().slideUp();
          } else {
               $('dl dt').removeClass('activo');
               $(this).addClass('activo');
               $('dl dd').slideUp();
               $(this).next().slideDown();
          }
       });
/*---------------------slider noticias--------------------*/

try {var W = $('#event_rotator').width(),
    N = $('#slider .event').length,
    C = 0,
    intv;

if(N<=1)$('#left, #right').hide(); 
$('#slider').width( W*N );

$('#left, #right').click(function(){
     C = (this.id=='right'? ++C : --C) < 0 ? N-1 : C%N ;
     $('#slider').stop().animate({left: -C*W }, 800 );
});

function auto(){
  intv = setInterval(function(){
      $('#right').click();
  }, 3000 );
}
auto();

$('#event_rotator').hover(function( e ){
  return e.type=='mouseenter' ? clearInterval(intv) : auto();
});
} catch (error) { throw error; }

/*------------------------swipebox------------------------*/
;( function( $ ) {

  $( '.swipebox' ).swipebox( {
    useCSS : true, // false will force the use of jQuery for animations
    useSVG : true, // false to force the use of png for buttons
    initialIndexOnArray : 0, // which image index to init when a array is passed
    hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
    removeBarsOnMobile : true, // false will show top bar on mobile devices
    hideBarsDelay : 3000, // delay before hiding bars on desktop
    videoMaxWidth : 1140, // videos max width
    beforeOpen: function() {}, // called before opening
    afterOpen: null, // called after opening
    afterClose: function() {}, // called after closing
    loopAtEnd: false // true will return to the first image after the last image is reached
  } );

} )( jQuery );


/*------------------------parallax------------------------*/
      
      $(document).ready(function(){
          $('section[data-type="parallax_section"]').each(function(){
              var $bgobj = $(this); // Variable para asignacion de objeto
              $(window).scroll(function() {
                $window = $(window);
                  var yPos = -($window.scrollTop() / $bgobj.data('speed'));
                  // cordinadas del background
                  var coords = '50% '+ yPos + 'px';
                  // moviendo el background
                  $bgobj.css({ backgroundPosition: coords });
              });
          });
      });

/*------------------------mixitUP------------------------*/
$(function() {

  $("#container").mixItUp({
  layout: {
    containerClass: 'list'
  }
});

  var inputText;
  var $matching = $();

  // Delay function
  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();

  $("#input").keyup(function(){
    // Delay function invoked to make sure user stopped typing
    delay(function(){
      inputText = $("#input").val().toLowerCase();
      
      // Check to see if input field is empty
      if ((inputText.length) > 0) {            
        $( '.mix').each(function() {
          $this = $("this");
          
           // add item to be filtered out if input text matches items inside the title   
           if($(this).children('#title , #hora, #fecha').text().toLowerCase().match(inputText)) {
            $matching = $matching.add(this);
          }
          else {
            // removes any previously matched item
            $matching = $matching.not(this);
          }
        });
        $("#container").mixItUp('filter', $matching);
      }

      else {
        // resets the filter to show all item if input is empty
        $("#container").mixItUp('filter', 'all');
      }
    }, 200 );
  });
})
/*------------------------caja abrecierra------------------------*/
$( "#open-busca" ).click(function() {
  $( "#caja-busca" ).toggle();
});

var element = document.documentElement;
  
if(element.scrollWidth > element.clientWidth) {
  // Overflow detected; force scroll bar
  element.style.overflow = 'scrollbar';
} else {
  // No overflow detected; prevent scroll bar
  element.style.overflow = 'hidden';
}