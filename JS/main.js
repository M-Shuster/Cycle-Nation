function myFunction(x) {
  x.classList.toggle("change");
}

//on mouseEvent Properties
  /*
    var followCursor = (
    function() {
    var s = document.getElementById('object');
    s.style.position = 'absolute';
  
    return {
      init: function() {
        document.body.appendChild(s);
      },
  
      run: function(e) {
        var e = e || window.event;
        s.style.left = (e.clientX - 10) + 'px';
        s.style.top = (e.clientY - 10) + 'px';
        getMouseCoords(e);
      }
    };
  }());
  
  window.onload = function() {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
  }
  */