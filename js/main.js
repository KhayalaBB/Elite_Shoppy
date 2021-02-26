var slideCount = document.querySelectorAll('.slider .slide-item').length;
var slideWidth = document.querySelectorAll('.slider-outer')[0].offsetWidth;
var slideHeight = document.querySelectorAll(".slider-outer")[0].offsetHeight;
var sliderUlWidth = slideCount * slideWidth;

  for (var i = 0; i < slideCount; i++) {
    document.querySelectorAll('.slide-item')[i].style.cssText = "width:" + slideWidth + "px;height:" + slideHeight + "px";
  }

  setInterval(function() {
    moveRight();
  }, 9000);
  var counter = 1;
  function moveRight() {
   var slideNum = counter++;
      if ( slideCount > slideNum ) { 
        var transformSize = slideWidth * slideNum;
        document.querySelectorAll('.slider')[0].style.cssText = 
          "width:" + sliderUlWidth + "px; transition:all 1.5s ease; transform:translate3d(-" + transformSize + "px, 0px, 0px)";

      }  else {
        counter = 1;
        document.querySelectorAll('.slider')[0].style.cssText = 
        "width:" + sliderUlWidth + "px;transition:all 1.5s ease; transform:translate3d(0px, 0px, 0px)";
      
      }
} 

counter=4;
 function moveLeft() {
     var slideNum = counter--;
  if ( slideCount > slideNum  ) { 
    var transformSize = slideWidth * slideNum;
        document.querySelectorAll('.slider')[0].style.cssText = 
          "width:" + sliderUlWidth + "px; transition:all 1.5s ease; transform:translate3d(-" + transformSize + "px, 0px, 0px)";
      } 
       /* else {
          counter=4;
          document.querySelectorAll('.slider')[0].style.cssText = 
          "width:" + sliderUlWidth + "px; transition:all 1.5s ease; transform:translate3d(-5396px, 0px, 0px)";
      }   */
}
        
     

  let next = document.querySelector(".next");
next.addEventListener("click", () => {
    moveRight();
  })
  let prev = document.querySelector(".prev");
  prev.addEventListener("click", () => {
   moveLeft();
  }) 