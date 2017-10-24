(function () {
    
      function loadMe() {
        var greetings = ["Happy", "Have a good", "It's"];
        var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday",
                        "Thursday", "Friday", "Saturday"];
    
        var greeting = 
          greetings[Math.floor(Math.random() * greetings.length)];
        var todayIs = weekdays[new Date().getDay()];
      
        document.getElementById('elt1').innerHTML = 
          greeting + " " + todayIs + "!";
      }
    
      window.onload = loadMe;
      
    })()