$(document).ready(function(){
  var bug = true;

  $(".reveal").on('mousemove', function(event) {
    if (bug) {
      var upX = event.clientX + $(document).scrollLeft();
      var upY = event.clientY + $(document).scrollTop();
      var mask = $('#mask circle')[0];
      mask.setAttribute("cy", (upY - 5) + 'px');
      mask.setAttribute("cx", (upX) + 'px');
    }
  });
  var randomX = function() {
    return Math.floor((Math.random() * 90 + 1));
  }
  var randomY = function() {
    return Math.floor((Math.random() * 90 + 1));
  }

  var moveBug = function() {
    $(".bug").animate({ x: randomX() + "%", y: randomY() + "%" }, duration = 5000, function() {
      moveBug();
    });
  }

  var startBug = function() {
    $(".bug").animate({ x: randomX() + "%", y: randomY() + "%" });
    moveBug();
  }

  $(".bug").click(function() {
    bug = false;
    $("#mainSvg").remove();
    $("#compile").css('color', 'green');
    $("#compile").text("Compilation completed with 0 error(s)");
  });

  startBug();
});
