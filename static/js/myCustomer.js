$(function() {
        const urlEndForCache = 'v5'
        const envi = 'local';
        if(envi == 'local'){
        }else{
            console.log = function(){};
            console.dir = function(){};
            console.info = function(){};
            console.debug = function(){};
            console.warn = function(){};
        }
    $('#defaultIndex').css({
      "background-color" : "rgba(0, 0, 0, 0.56)",
    });
  $('#myCarousel').css({
    "background-color" : "rgba(0, 0, 0, 0.56)!important",
  });
    $(document).ready(function(){
      $('.AgentOffline').css({
        "background": "url(./static/css/img/liveAgent/offlineHover.png)",
        "right": "5px"
      });
      $('.AgentOnline').css({
        "background": "url(./static/css/img/liveAgent/onlineHoverNew.png)",
        "right": "5px"
      });

      var toCheckBounce = function(){
        //kai150 bounce
        if($('.kai150').hasClass('swing animated')){
          $('.kai150').removeClass('swing animated');
        }else{
          $('.kai150').addClass('swing animated');
        }
      }

      $.fn.scrollEnd = function(callback, timeout) {
        $(this).scroll(function(){
          var $this = $(this);
          if ($this.data('scrollTimeout')) {
            clearTimeout($this.data('scrollTimeout'));
          }
          $this.data('scrollTimeout', setTimeout(callback,timeout));
        });
      };
      $(document).scrollEnd(function(){
        toCheckBounce();
      }, 300);
      $('.kai150').mouseover(function(){
        toCheckBounce();
      });

      $(document).on('scroll', function(){

        if($(document).scrollTop() > 35){
          $('.AgentOffline').css({
            "background": "url(./static/css/img/liveAgent/offline.png)",
            "width": "66px",
            "right": "4px",
            "background-position-x": "-77px"
          });
          $('.AgentOnline').css({
            "background": "url(./static/css/img/liveAgent/online.png)",
            "width": "66px",
            "right" : "2px"
          });
        }else{
          $('.AgentOffline').css({
            "background": "url(./static/css/img/liveAgent/offlineHover.png)",
            "width": "142px",
            "right": "5px"
          });
          $('.AgentOnline').css({
            "background": "url(./static/css/img/liveAgent/onlineHoverNew.png)",
            "width": "142px",
            "right": "5px"
          });
        }

      });

      $(document).on('scroll', function(){
          console.log($(document).scrollTop())
            if($(document).scrollTop() > 400){
              $('#defaultIndex').css({
                "background-color" : "white",
              });
              $('#defaultIndex #navbar').css({
                  "background-color" : "white",
              });
              $('#defaultIndex ul li p').css({
                  "color": "#777"
              });
              $('.navbar-default .navbar-toggle .icon-bar').css({
                "background-color" : "#ddd",
              });
              if($(document).width() < 767) {
                $('#navbar.navbar-collapse.collapse').css({
                  "background-color" : "rgba(0, 0, 0, 0.56)"
                });
              };
              $('#defaultIndex img').attr('src', './static/assets/logo.png' + '?' + urlEndForCache);
            }else{
              $('#defaultIndex #navbar').css({
                "background-color" : "rgba(0, 0, 0, 0.56)"
              });
              $('#defaultIndex').css({
                "background-color" : "rgba(0, 0, 0, 0.56)",
              });
              $('#defaultIndex ul li p').css({
                  "color": "#fff",
              });
              $('#defaultIndex img').attr('src', './static/assets/logoWhite.png' + '?' + urlEndForCache);
            }
        });

      var is_touch_device = function() {
        try {
          document.createEvent("TouchEvent");
          return true;
        } catch (e) {
          return false;
        }
      }

      if(is_touch_device()){
        $('#liveAgentArea').hide();
        $('#liveAgentArea2').hide();
      }else{
        $('#liveAgentArea').show();
        $('#liveAgentArea2').show();
      }
    });

    var idleTime = 0;
    $(document).ready(function () {
      //Increment the idle time counter every minute.
      var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

      //Zero the idle timer on mouse movement.
      $(this).mousemove(function (e) {
        idleTime = 0;
      });
      $(this).keypress(function (e) {
        idleTime = 0;
      });
    });

    function timerIncrement() {
      idleTime = idleTime + 1;
      if (idleTime > 29) { // 20 minutes
        window.location.href = 'index.html';
      }
    }

    //session Detector part
    var sessionDetector = function() {
        var timeout;
        timeout = setTimeout(function(){
          window.location.href = 'index.html';
        }, 1800000);
        document.onmousemove = function(){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                window.location.href = 'index.html';
            }, 1800000);
        }
        //for mobile session
        $(document).on('click', function(){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                window.location.href = 'index.html';
            }, 1800000);
        });
        $(document).on('scroll', function(){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                window.location.href = 'index.html';
            }, 1800000);
        });
    }
    sessionDetector();
});
