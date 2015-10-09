function formatTime (num) {
  var hex = num.toString(16);
  hex = hex.length === 2 ? hex : '0' + hex;
  return hex;
}

setInterval(function() {
  
  var now = new Date ();

  var hours = formatTime(now.getHours());
  var minutes = formatTime(now.getMinutes());
  var seconds = formatTime(now.getSeconds());

  var timeStr = '#' + hours + minutes + seconds;

  //Either this...:
  $('h1').text(timeStr);
  $('body').css('background-color', timeStr);

  //...Or this:
  document.querySelector('h1').textContent = (timeStr);
  document.body.style.backgroundColor = timeStr;

});