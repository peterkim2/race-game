  var Animal = function(speed, focus, name) {
    this.speed = speed;
    this.focus = focus;
    this.name = name;
    this.position = 0;
    this.report = function() {
      return this.name + " finished at " + this.position + " feet.";
    };
    this.run = function() {
      if(this.focus > (Math.random() * 10)) {
        this.position += this.speed;
      }
    };
  }

$(document).ready(function() {
    $('#userInput').keypress(function(event) {
          if (event.keyCode == 13) {
            turtle.speed = parseInt($('#mikeSpeed').val());
            rabbit.speed = parseInt($('#peterSpeed').val());
            shiba.speed = parseInt($('#roxySpeed').val());
  }
  });
});  
  var turtle = new Animal(2, 9, "Mike"),
      rabbit = new Animal(11, 4, "Peter"),
      shiba = new Animal(8, 7, "Roxy");
    
  var distance = 40;
  
  //function pickSpeed(object) {
    //object.speed = parseInt(prompt("Pick " + object.name + "'s " + "speed between 1-10")); //parseInt converts input as integer instead of string.
    //while(isNaN(object.speed) || object.speed <= 0 || object.speed > 10) { //isNaN is 'is not a number'
        //object.speed = parseInt(prompt("Please pick " + object.name + "'s " + "speed between 1-10!"));
    //}
  //}
  function race() {
//    pickSpeed(turtle); //runs the function pickSpeed
//    pickSpeed(rabbit);
//    pickSpeed(shiba);
      while(turtle.position < distance && rabbit.position < distance && shiba.position < distance) {
      turtle.run();
      rabbit.run();
      shiba.run();
  }

    console.log(turtle.report());
    console.log(rabbit.report());
    console.log(shiba.report());              
    document.getElementById("results").innerHTML += "<h3>" + turtle.report() + "</h3>";
    document.getElementById("results").innerHTML += "<h3>" + rabbit.report() + "</h3>";
    document.getElementById("results").innerHTML += "<h3>" + shiba.report() + "</h3>";
    if(turtle.position > rabbit.position && turtle.position > shiba.position) {
      alert("Mike is the winner! Scroll down to see the results.");
    }else if(turtle.position < rabbit.position && rabbit.position > shiba.position) {
      alert("Peter is the winner! Scroll down to see the results.");
    }else{
      alert("Roxy is the winner! Scroll down to see the results.");
    }

}

var button = document.getElementById("button");
  button.addEventListener("click", race);
//var userInput = document.getElementById('userInput');
//  userInput.addEventListener("keyup", race);
//var replay = document.getElementById("replay");
//  button.addEventListener("click", replay);
