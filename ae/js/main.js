$(function () {
  // Remove svg.radial-progress .complete inline styling
  $('svg.radial-progress').each(function (index, value) {
    $(this).find($('circle.complete')).removeAttr('style');
  });
/*
  // Activate progress animation on scroll
  $(window).scroll(function () {
    $('svg.radial-progress').each(function (index, value) {
      // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom

      // Get percentage of progress
      percent = $(value).data('percentage');
      // Get radius of the svg's circle.complete
      radius = $(this).find($('circle.complete')).attr('r');
      // Get circumference (2πr)
      circumference = 2 * Math.PI * radius;
      // Get stroke-dashoffset value based on the percentage of the circumference
      strokeDashOffset = circumference - ((percent * circumference) / 100);
      // Transition progress for 1.25 seconds
      $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);

    });
  }).trigger('scroll');
*/
});
$(document).ready(function () {
  $(".model-codeLink .btnClose-modelslotPage , .model-codeLink .overlay ,.model-codeLink .btnNo").click(function () {
    $(".model-codeLink").removeClass("active");
  });
  $(".call-codeLinkModel").click(function () {
    $(".model-codeLink").addClass("active");
  });


  $(".model-Link .btnClose-modelslotPage , .model-Link .overlay").click(function () {
    $(".model-Link").removeClass("active");
    $(".model-Link .Link_wrapper").removeClass("active");
  });

  $(".SlotGame-item").click(function () {
    let x = $(this).data("target");
    $(".model-Link").addClass("active");

    $(".model-Link .Link_wrapper").removeClass("active");
    $(x).addClass("active");
  });
});
/*
var graphics = $(".circle .radial-progress").length;
for (i = 1; i <= graphics; i++) {
  let value = $(".circle:nth-child(" + i + ") .radial-progress").data("percentage");
  console.log(value)
  if (value >= 61) { //61 ++
    $(".circle:nth-child(" + i + ") svg.radial-progress:nth-of-type(6n+1) circle").addClass("green");
  } else if (value >= 31) { //31-60
    $(".circle:nth-child(" + i + ") svg.radial-progress:nth-of-type(6n+1) circle ").addClass("yellow");
  } else if (value <= 30) { //30--
    $(".circle:nth-child(" + i + ") svg.radial-progress:nth-of-type(6n+1) circle ").addClass("red");
  }
}
*/

$(document).ready(function () {
  // -----------model-login--------
  $(".menu-icon").click(function () {
    $(this).toggleClass("change");
    $('.menu_wrapper').toggleClass("menu_wrapper_active");
  });
  // ---------close model------------
  $(".model-group .overlay").click(function () {
    $('.model-group').removeClass("active");
    $('.model-redeem').removeClass("model-redeem_active");
    $('.model-user').removeClass("model-user_active");
    $('.model-logout').removeClass("model-logout_active");
  });
  $(".btn-closeModel").click(function () {
    $('.model-group').removeClass("active");
    $('.model-redeem').removeClass("model-redeem_active");
    $('.model-user').removeClass("model-user_active");
    $('.model-logout').removeClass("model-logout_active");
  });
  $(".btn-cancel").click(function () {
    $('.model-group').removeClass("active");
    $('.model-redeem').removeClass("model-redeem_active");
    $('.model-user').removeClass("model-user_active");
    $('.model-logout').removeClass("model-logout_active");
  });
  // ---------active model------------
  $(".btn-redeem").click(function () {
    $('.model-group').addClass("active");
    $('.model-redeem').addClass("model-redeem_active");
  });
  $(".btn-user").click(function () {
    $('.model-group').addClass("active");
    $('.model-user').addClass("model-user_active");
  });
  $(".btn-logout").click(function () {
    $('.model-group').addClass("active");
    $('.model-logout').addClass("model-logout_active");
  });
  // -------------btn-formulaDD-----------------
  $(".btn-formulaDD").click(function () {
    $('.formula-group').toggleClass("formula-group_active");
  });
});
$(document).ready(function () {
  for (i = 1; i <= 72; i++) {
    $(".chessboard .bg-chessboard").append("<div class='bg-chessboard-item'></div>");
  }
});
$(document).ready(function () {
  $(".formula-item").click(function () {
    $(this).siblings().removeClass('formula-item_active');
    $(this).addClass('formula-item_active');

    var value = $(this).text();
    $(".btn-formulaDD p").text(value);

    $(".formula-group").removeClass("formula-group_active");
  });

  $(".btnLeagues-item").click(function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });
});

// -------------------loginPAGE------------------
$(document).ready(function () {
  $(".login-page .model-group .overlay").click(function () {
    $('.login-page .model-group').removeClass("active");
    $('.login-page .model-login').removeClass("model-login_active");
    $('.login-page .model-register').removeClass("model-register_active");
  });
  $(".btn-closeModel").click(function () {
    $('.login-page .model-group').removeClass("active");
    $('.login-page .model-login').removeClass("model-login_active");
    $('.login-page .model-register').removeClass("model-register_active");
  });
  $(".btn-cancel").click(function () {
    $('.login-page .model-group').removeClass("active");
    $('.login-page .model-login').removeClass("model-login_active");
    $('.login-page .model-register').removeClass("model-register_active");
  });

  $(".login-page .btn-login").click(function () {
    $('.login-page .model-group').addClass("active");
    $('.login-page .model-login').addClass("model-login_active");
  });
  $(".login-page .btn-register").click(function () {
    $('.login-page .model-group').addClass("active");
    $('.login-page .model-register').addClass("model-register_active");
  });

  $(".login-page .link-login").click(function () {
    $('.login-page .model-group').removeClass("active");
    $('.login-page .model-register').removeClass("model-register_active");

    $('.login-page .model-group').addClass("active");
    $('.login-page .model-login').addClass("model-login_active");
  });
  $(".login-page .link-register").click(function () {
    $('.login-page .model-group').removeClass("active");
    $('.login-page .model-login').removeClass("model-login_active");

    $('.login-page .model-group').addClass("active");
    $('.login-page .model-register').addClass("model-register_active");
  });
  $(".refreshCode").click(function () {
    $('.refreshCode').addClass('active');
    setTimeout(function () {
      $('.refreshCode').removeClass('active');
    }, 700);
  });


});
$(document).ready(function () {

  var Roomlength_1 = $(".menosary_wrapper .box-room-item").length;

  for (i = 1; i <= Roomlength_1; i++) {
    var value = $(".menosary_wrapper .box-room-item:nth-child(" + i + ") .winrate-percent h3").text().replace(/[^0-9]/g, "");

    if (value >= 90) { //90 ++
      $(".menosary_wrapper .box-room-item:nth-child(" + i + ") .winrate-percent h3").css("color", "#05FF00");
      $(".menosary_wrapper .box-room-item:nth-child(" + i + ") .winrate-bar .winrate-bar_inner").css("background-color", "#05FF00");
    } else if (value >= 80) { //80-89
      $(".menosary_wrapper .box-room-item:nth-child(" + i + ") .winrate-percent h3").css("color", "#82F500");
      $(".menosary_wrapper .box-room-item:nth-child(" + i + ") .winrate-bar .winrate-bar_inner").css("background-color", "#82F500");
    } else if (value >= 70) { //70-79
      $(".menosary_wrapper .box-room-item:nth-child(" + i + ") .winrate-percent h3").css("color", "#FFEB00");
      $(".menosary_wrapper .box-room-item:nth-child(" + i + ") .winrate-bar .winrate-bar_inner").css("background-color", "#FFEB00");
    } else if (value >= 60) { //60-69
      $(".menosary_wrapper .box-room-item:nth-child(" + i + ") .winrate-percent h3").css("color", "#FF6B00");
      $(".menosary_wrapper .box-room-item:nth-child(" + i + ") .winrate-bar .winrate-bar_inner").css("background-color", "#FF6B00");
    } else if (value >= 50) { //50-59
      $(".menosary_wrapper .box-room-item:nth-child(" + i + ") .winrate-percent h3").css("color", "#FF3600");
      $(".menosary_wrapper .box-room-item:nth-child(" + i + ") .winrate-bar .winrate-bar_inner").css("background-color", "#FF3600");
    } else if (value <= 50) { //50--
      $(".menosary_wrapper .box-room-item:nth-child(" + i + ") .winrate-percent h3").css("color", "#FF0000");
      $(".menosary_wrapper .box-room-item:nth-child(" + i + ") .winrate-bar .winrate-bar_inner").css("background-color", "#FF0000");
    }
    else {
      $(".menosary_wrapper .box-room-item:nth-child(" + i + ") .winrate-percent h3").css("color", "#E0E0E0");
    }
  }
});
// -----------------------------------
particlesJS("bg-canvas",
  {
    "particles": {
      "number": {
        "value": 1000,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#d4901a", "#ffda0f", "#fffffe"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 8,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 300,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 800,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 800,
          "size": 80,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 100,
          "duration": 1
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
)



