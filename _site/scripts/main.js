/*Everything inside document.ready(), so js fires once the DOM is loaded */

$(document).ready(function(){

  console.log("hello");


  function toggleMenu(){

    console.log("opened");
    $('body').toggleClass('menu-visible menu-hidden');

  }

  //bind click event to button

  $('body').on('click', '.toggle-menu', toggleMenu);

  //image scroll reveal

  // window.sr = ScrollReveal({ reset: true });
  // sr.reveal('.show-me', { opacity: 0, duration: 2000});

});
