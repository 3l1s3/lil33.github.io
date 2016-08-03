var selimT = document.querySelector('#selim');
var selimTfront = selim.getElementByClassName('front')[0];
var selimTheadShot = selim.getElementByClassName('headshot')[0];

selimTfront.addEventListener("mouseover", function() {
  selimTheadShot.style.transition = "transform 5s";
  selimTheadShot.style.backgroundImage = "url('../images/s01.jpg')";
  });
  
 ********



#selimss .headshot {
  opacity:0;
  -webkit-transition:opacity 1.0s linear 0s;
  transition:opacity 1.0s linear 0s;
}

$(document).ready(function(){
    $("selim").click(function(){
        $(this).selimssSlide();
    });
});
  var selimss_i = 0;
  var selimss_array = [
    "<img src="../images/selimPhoto.jpg" id="selimss" class="headshot",
    "<img src="../images/s01.jpg" id="selimss" class="headshot",
    "<img src="../images/s02.jpg" id="selimss" class="headshot",
    "<img src="../images/s03.jpg" id="selimss" class="headshot",
    "<img src="../images/s04.jpg" id="selimss" class="headshot",
    "<img src="../images/s05.jpg" id="selimss" class="headshot",
    "<img src="../images/s06.jpg" id="selimss" class="headshot",
    "<img src="../images/s07.jpg" id="selimss" class="headshot",
    "<img src="../images/s08.jpg" id="selimss" class="headshot",
    "<img src="../images/s09.jpg" id="selimss" class="headshot",
    "<img src="../images/s10.jpg" id="selimss" class="headshot",
    "<img src="../images/s11.jpg" id="selimss" class="headshot",
    "<img src="../images/s12.jpg" id="selimss" class="headshot",
    "<img src="../images/s13.jpg" id="selimss" class="headshot",
    "<img src="../images/s14.jpg" id="selimss" class="headshot",
    "<img src="../images/s15.jpg" id="selimss" class="headshot",
    "<img src="../images/s16.jpg" id="selimss" class="headshot",
    "<img src="../images/s17.jpg" id="selimss" class="headshot",
    "<img src="../images/s18.jpg" id="selimss" class="headshot",
    "<img src="../images/s19.jpg" id="selimss" class="headshot",
    "<img src="../images/s20.jpg" id="selimss" class="headshot",
    "<img src="../images/s21.jpg" id="selimss" class="headshot",
    "<img src="../images/s22.jpg" id="selimss" class="headshot",
    "<img src="../images/s23.jpg" id="selimss" class="headshot",
    "<img src="../images/s24.jpg" id="selimss" class="headshot",
    "<img src="../images/s25.jpg" id="selimss" class="headshot",
    "<img src="../images/s26.jpg" id="selimss" class="headshot",
    "<img src="../images/s27.jpg" id="selimss" class="headshot",
    "<img src="../images/s28.jpg" id="selimss" class="headshot"
    ];
  var selimss_elem;
function selimssNext() {
  selimss_i++;
  selimss_elem.style.opacity = 0;
    if(selimss_i > (selimss_array.length - 1)) {
      selimss_i = 0;
      }
      setTimeout('selimssSlide()',1000);
}
function selimssSlide() {
  selimss_elem.innerHTML = selimss_array[selimss_i];
  selimss_style.opacity = 1;
  setTimeout('selimssNext()',2000);
}
}