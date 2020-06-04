(function (window) {

    var names = ["Fekadu", "Baye", "Bob", "Bill", "Mimi", "Mehertu"];
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter == 'b') {
        window.byeSpeaker.speak(names[i]);
      } else {
        window.helloSpeaker.speak(names[i]);
      }
    }
    
    })(window);
    