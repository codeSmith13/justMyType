$(document).ready(function () {
  let upperKeyboard = $("#keyboard-upper-container");
  let lowerKeyboard = $("#keyboard-lower-container");

  let sentences = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate",
  ];
  let sentenceCounter = 0;
  let letterCounter = 0;
  let currentLetter = $("#target-letter");
  let sentence = $("#sentence");
  let highLight = $("#yellow-block");
  let feedBack = $("#feedback");
  $(currentLetter).text(sentences[sentenceCounter][letterCounter]);
  $(sentence).text(sentences[sentenceCounter]);
  
  
  // remove shift keyboard
  $(upperKeyboard).css("display", "none");
  // toggle between keyboards when shift is clicked
  $(document).keydown(function (e) {
    if (e.keyCode == 16) {
      upperKeyboard.show();
      lowerKeyboard.hide();
    }
    
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 16) {
      upperKeyboard.hide();
      lowerKeyboard.show();
    }
  });

  // highlight keys on keyboard
  $(document).keypress(function (e) {
    $(`#${e.keyCode}`).css("background-color", "orange");
    $(highLight).animate( { left: "+=17.5px" },{ duration: 1, easing: "linear" }
    );
  });
  
  $(document).keyup(function (e) {
    let asciiLetter = e.key.charCodeAt(0);
    $(`#${asciiLetter}`).css("background-color", "#f5f5f5");
  });
  
  $(document).keypress(function (e) {
      
      $(currentLetter).text(sentences[sentenceCounter][letterCounter]);
       letterCounter++;
       console.log(e.keyCode);
      $(feedBack).append('<div class="glyphicon glyphicon-remove"</div>');
    
        $(feedBack).append('<div class="glyphicon glyphicon-ok"</div>');
    
 
        
  });


});
