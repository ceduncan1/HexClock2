// date object, set interval, convert to hex value (remove ':')
// (function() {

// Find the time
  // Find current time
  var hexNum;
  var hexCode;
  var bigFunction = function() {
    var currentTime = new Date ();
    // Grab different pieces of time
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    var hexHr = currentHours.toString(16);
    var hexMin = currentMinutes.toString(16);
    var hexSec = currentSeconds.toString(16);
    // console.log(hexHr);
    // console.log(hexMin);
    // console.log(hexSec);

    // Make all pieces double digit
    var ddHours = (hexHr < 10 || hexHr === 'a' || hexHr === 'b' || hexHr === 'c' || hexHr === 'd' || hexHr === 'e' || hexHr === 'f') ? '0' + hexHr: hexHr;
    var ddMinutes = (hexMin < 10 || hexMin === 'a' || hexMin === 'b' || hexMin === 'c' || hexMin === 'd' || hexMin === 'e' || hexMin === 'f') ? '0' + hexMin: hexMin;
    var ddSeconds = (hexSec < 10 || hexSec === 'a' || hexSec === 'b' || hexSec === 'c' || hexSec === 'd' || hexSec === 'e' || hexSec === 'f') ? '0' + hexSec: hexSec;
    // console.log(ddHours);
    // console.log(ddMinutes);
    // console.log(ddSeconds);

    //Piece them together
    hexNum = ddHours + ddMinutes + ddSeconds;
    // console.log(hexCode);
    var clockDisplay = $('#clock').text(hexNum);
    // console.log(clockDisplay);


  }
  bigFunction();
  window.setInterval(bigFunction, 1000);

  
  var bkgdColor = function () {
    hexCode = '#' + hexNum;
    $('body').css('background-color', hexCode);
    $('#clock').css('color', 'white');
  }

  bkgdColor();
  window.setInterval(bkgdColor, 2000)




//     // Piece them together
//     hexCode = '#' + ddHours + ddMinutes + ddSeconds;
//     var clockDisplay = $('#clock').text(hexCode);
//     // console.log(clockDisplay);

    
//   }
//   bigFunction();
//   window.setInterval(bigFunction, 1000);



//   var bkgdColor = function () {
//     $('.wrapper').css('background-color', hexCode);
//     $('#clock').css('color', 'white');
//   }

//   bkgdColor();
//   window.setInterval(bkgdColor, 2000)
  





// })();






















  // var dog = function() {console.log('dog');}
  // var dog2 = console.log('dog');
  // var currentTime = new Date ();


  // var resetTime = function () {
  //   return new Date ();
  // }
  // var currentTime = window.setInterval(function () {
    // return new Date ()}, 1000);




    // var clockDisplay = document.querySelector('#clock');
    // var textNode = document.createTextNode(wholeTime);
    // clockDisplay.appendChild(textNode);



  // $('.wrapper').css('background-color', 'red');


  // window.setInterval(aFunctionToChangeBkgrdColorTo'hexCode', 2000); // Every 2 secs
  // $('#wrapper').css('background-color', hexCode);


  // var finalClock = window.setInterval(wholeTime, 500);

  // DOM stuff
  // var clockDisplay = document.querySelector('#clock');
  // var textNode = document.createTextNode(wholeTime);
  // clockDisplay.appendChild(textNode);
  


// Refresh the time
  // var finalClock = window.setInterval(currentTime, 1000);







