$(document).ready(function () {
  let bgSlider = ['bg2', 'bg3', 'bg4', 'bg5', 'bg6']
  // 'style',`background-image:url('./assets/sliders/${bgSlider[Math.floor(Math.random()*bgSlider.length)]}.png');`
  let bgSliderTemp = [];


    bgSlider.forEach(element => {
        var tempImage = new Image();

        tempImage.src = "./assets/images/sliders/"+ element + ".png";
        bgSliderTemp.push(tempImage);
    });

    setInterval(() => {
        document.body.style.backgroundImage = `url('${bgSliderTemp[Math.floor(Math.random() * bgSliderTemp.length)].src}')`;
      
    }, 5000);





  function clock() {
    var time = new Date(),
      hours = time.getUTCHours();
    (minutes = time.getUTCMinutes()), (seconds = time.getUTCSeconds());

    document.querySelectorAll(".clock")[0].innerHTML =
      harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

    function harold(standIn) {
      if (standIn < 10) {
        standIn = "0" + standIn;
      }
      return standIn;
    }
  }
  setInterval(clock, 1000);

  function clockTwo() {
    var time = new Date(),
      hours = time.getUTCHours();
    (minutes = time.getUTCMinutes()), (seconds = time.getUTCSeconds());

    document.querySelectorAll(".clockTwo")[0].innerHTML =
      harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

    function harold(standIn) {
      if (standIn < 10) {
        standIn = "0" + standIn;
      }
      return standIn;
    }
  }
  setInterval(clockTwo, 1000);

  function clockThree() {
    var time = new Date(),
      hours = time.getUTCHours();
    (minutes = time.getUTCMinutes()),
      (document.querySelectorAll(".clockThree")[0].innerHTML =
        harold(hours) + ":" + harold(minutes));

    function harold(standIn) {
      if (standIn < 10) {
        standIn = "0" + standIn;
      }
      return standIn;
    }
  }

  setInterval(clockThree, 1000);

  if ($(document).width() > 768) {
    location.href = "../index.html";
  }
  $(window).on("resize", function () {
    if ($(document).width() > 768) {
      location.href = "../index.html";
    }
  });

  $("#menu").click(function () {
    $("#aplications").fadeToggle(300);
  });

  $("#back").click(function () {
    $("#aplications").css("display", "none");
    $(".socialMediaPlace").animate(
      {
        top: "-150px",
      },
      300
    );
  });

  var a = true;

  $("#social").click(function () {
    if (a) {
      a = false;
      $(".socialMediaPlace").animate(
        {
          top: "10px",
        },
        300
      );
    } else if (!a) {
      a = true;
      $(".socialMediaPlace").animate(
        {
          top: "-150px",
        },
        300
      );
    }
  });

  $(".loadScreen").click(function () {
    $( ".loadScreen" ).fadeOut( 2000 );
  });
});
