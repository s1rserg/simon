const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

let randomNumbers = [];
  let roundNumber = 1;
  let chosenNumbers = [];

  $('.con').click(function() {
    $('.title').text("Round " + roundNumber);
    $('.con').unbind();
    randomGenerator();
    eventlisteners();
  })

  function randomGenerator() {
    let randomNumber = Math.ceil(Math.random() * 4);
    switch (randomNumber) {
      case 1:
        $('.green').addClass('pressed');
        new Audio("sounds/green.wav").play();
        randomNumbers.push("green");
        setTimeout(function() {
          $('.green').removeClass('pressed');
        }, 350)
        break;
      case 2:
        $('.red').addClass('pressed');
        new Audio("sounds/red.wav").play();
        randomNumbers.push("red");
        setTimeout(function() {
          $('.red').removeClass('pressed');
        }, 350)
        break;
      case 3:
        $('.yellow').addClass('pressed');
        new Audio("sounds/yellow.wav").play();
        randomNumbers.push("yellow");
        setTimeout(function() {
          $('.yellow').removeClass('pressed');
        }, 350)
        break;
      case 4:
        $('.blue').addClass('pressed');
        new Audio("sounds/blue.wav").play();
        randomNumbers.push("blue");
        setTimeout(function() {
          $('.blue').removeClass('pressed');
        }, 350)
        break;
    }
  }

  function eventlisteners() {
    $('.green').click(function() {
      chosenNumbers.push("green");
      new Audio("sounds/green.wav").play();
      eventChecker();
    })
    $('.red').click(function() {
      chosenNumbers.push("red");
      new Audio("sounds/red.wav").play();
      eventChecker();
    })
    $('.yellow').click(function() {
      chosenNumbers.push("yellow");
      new Audio("sounds/yellow.wav").play();
      eventChecker();
    })
    $('.blue').click(function() {
      chosenNumbers.push("blue");
      new Audio("sounds/blue.wav").play();
      eventChecker();
    })
    if (chosenNumbers[chosenNumbers.length - 1] !== randomNumbers[chosenNumbers.length - 1]) {
      $('.title').html('Game over');
      setTimeout(function(){
              new Audio("sounds/defeat.wav").play();
      }, 400);
      setTimeout(function(){
          $('.title').text("Round " + roundNumber);
                  randomGenerator();
      }, 1200);
      $('.col').unbind();
      $('.con').click(function() {
        randomNumbers.length = 0;
        chosenNumbers.length = 0;
        roundNumber = 1;
        $('.con').unbind();

        eventlisteners();
      });
      return;
    }
  }

  function eventChecker() {
    $('.col').unbind()
    if (chosenNumbers.length == randomNumbers.length) {
      check();
    } else {
      eventlisteners();
    }
  }

  function check() {
    for (var i = 0; i < chosenNumbers.length; i++) {
      if (chosenNumbers[i] !== randomNumbers[i]) {
        $('.title').html('Game over');
        setTimeout(function(){
                new Audio("sounds/defeat.wav").play();
        }, 400);
        setTimeout(function(){
          $('.title').text("Round " + roundNumber);
                    randomGenerator();
        }, 1200);
        $('.col').unbind();
        $('.con').click(function() {
          randomNumbers.length = 0;
          chosenNumbers.length = 0;
          roundNumber = 1;
          $('.con').unbind();

          eventlisteners();
        });
        return;
      }
    }
    chosenNumbers.length = 0;
    roundNumber++;
    $('.title').text("Round " + roundNumber);
    setTimeout(randomGenerator, 450);
    eventlisteners();
  }

  $('.small-title').click(function(event) {
    $('.small-title').text('Why did you do this to me? I am broken now(');
  })
