// // scroll in +add element
var boxes = document.querySelectorAll(".counted");
var boxesArray = Array.prototype.slice.call(boxes, 0);
var options = {
  root: null,
  rootMargin: "0px 50%",
  threshold: 0,
};
var observer = new IntersectionObserver(doWhenIntersect, options);
boxesArray.forEach(function (box) {
  observer.observe(box);
});

function doWhenIntersect(entries) {
  var entriesArray = Array.prototype.slice.call(entries, 0);
  entriesArray.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("count");
    }
  });
  // time
  $(function(){
      var countElm = $('.count'),
      countSpeed = 7;

      countElm.each(function(){
          var self = $(this),
          countMax = self.attr('data-num'),
          thisCount = self.text(),
          countTimer;

          function timer(){
              countTimer = setInterval(function(){
                  var countNext = thisCount++;
                  self.text(countNext);

                  if(countNext == countMax){
                      clearInterval(countTimer);
                  }
              },countSpeed);
          }
          timer();
      });
  });
}