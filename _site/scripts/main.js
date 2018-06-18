/*Everything inside document.ready(), so js fires once the DOM is loaded */

$(document).ready(function(){

  console.log("hello");


  function showMenu(){

    console.log("clicked");

  }
  //bind click event to button

  $('body').on('click', '.toggle-menu', showMenu);

  //image scroll reveal

  window.sr = ScrollReveal({ reset: true });
  sr.reveal('.show-me', { opacity: 0, duration: 2000});

});
