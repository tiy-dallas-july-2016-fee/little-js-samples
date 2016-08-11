'use strict';
if (this.Timers === undefined) this.Timers = {};

(function(context) {

  function start() {

    console.log('immediate!');
    setTimeout(function() {
      console.log('this is delayed');
    }, 3000);

    setInterval(function() {
      var d = new Date()
      var clockText = [d.getHours(), d.getMinutes(), d.getSeconds()]

      //console.log(clockText.join(":"))
      $('h1').html(clockText.join(':'));
    }, 1000);




    var left = 0;
    var width = document.documentElement.clientWidth;
    var direction = 'right';

    setInterval(function() {

      if (left >= width - 100) {
        direction = 'left';
      }
      else if (left <= 0) {
        direction = 'right';
      }


      if (direction === 'left') {
        left -= 4;
      }
      else {
        left += 4;
      }





      $('.moving-block').css('left', left + 'px');
    }, 1000 / 60);

  }

  context.start = start;

})(window.Timers);
