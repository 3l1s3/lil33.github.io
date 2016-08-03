// TEXT THAT IS GREYED OUT INDICATED A COMMENT IN THE CODE. PLEASE READ THE COMMENTS AS, IN THIS TEMPLATE, THEY ARE NOTES TO YOU ABOUT HOW TO ALTER THIS /PEOPLE CARD IN A WAY THAT WILL REMAIN COMPATIBLE WITH THE COURSE WEBSITE! 

// Below this line, you must change the id below ('#kanyewest') to reflect the id you created in the html panel for your partner ('#yourpartner')
window.addEventListener('load', function() {
  var myCard = document.querySelector('#selim');
  var flipButtons = Array.prototype.slice.call(myCard.querySelectorAll('i.flip'));
  flipButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      myCard.classList.toggle('flipped');
    });
  });
});


// Add your Javascript effects here.


function init() {
  var selim = document.querySelector('#selim .headshot');
  selim.style.backgroundImage = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q85KTD2/s28.jpg?pub_secret=b821d50c9a)';
    // <AR: When you use the `addEventListener` syntax, event names aren't prefixed with `on`…i.e. this should read `mouseout` instead https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   selim.addEventListener('onmouseout', function() { //this isn't working...
   selim.style.backgroundImage = 'url(https://files.slack.com/files-pri/T086L74T1-F1M71E84U/stezelphoto.jpg?pub_secret=929038c63e)';
  });   
 };


/*          
var selim = document.querySelector('#selim .headshot');
var slide0 = 'url(https://files.slack.com/files-pri/T086L74T1-F1M71E84U/stezelphoto.jpg?pub_secret=929038c63e)';
var slide1 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q85JHT6/s01.jpg?pub_secret=36cfcd462f)';
var slide2 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q87NM54/s02.jpg?pub_secret=f9e9ecebc5)';
var slide3 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8G25DK/s03.jpg?pub_secret=6e1dd5ee6e)';
var slide4 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8NCCQH/s04.jpg?pub_secret=a3af7a2d30)';
var slide5 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8NCE1X/s05.jpg?pub_secret=593673661c)';
var slide6 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8T25QS/s06.jpg?pub_secret=19f0b4a65a)';
var slide7 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q87NV7Y/s07.jpg?pub_secret=19b8b7431e)';
var slide8 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8G39MM/s08.jpg?pub_secret=271aba10ab)';
var slide9 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q85JVTN/s09.jpg?pub_secret=9170d99741)';
var slide10 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q85JX28/s10.jpg?pub_secret=9e9237b33b)';
var slide11 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8G2HE1/s11.jpg?pub_secret=db0f06f2d3)';
var slide12 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8B9XEU/s12.jpg?pub_secret=f07ec57d1e)';
var slide13 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8G3J5V/s13.jpg?pub_secret=c75a9b14e9)';
var slide14 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8NCU1X/s14.jpg?pub_secret=17c5ed50ec)';
var slide15 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q85K4DS/s15.jpg?pub_secret=cef544866b)';
var slide16 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8T2M98/s16.jpg?pub_secret=70f2c46f29)';
var slide17 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8G2SRK/s17.jpg?pub_secret=11bdc151d3)';
var slide18 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q87PATG/s18.jpg?pub_secret=3ff38a0b68)';
var slide19 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q85KA4C/s19.jpg?pub_secret=65d82276c3)';
var slide20 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8T2T0S/s20.jpg?pub_secret=4fa028cc76)';
var slide21 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q85KCG4/s21.jpg?pub_secret=deef42e9d6)';
var slide22 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8T2VNE/s22.jpg?pub_secret=bb10f101e7)';
var slide23 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8ND74Z/s23.jpg?pub_secret=5d532ea724)';
var slide24 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q6W9EFM/s24.jpg?pub_secret=9f3d833acc)';
var slide25 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8G3ZP1/s25.jpg?pub_secret=17591d5d6d)';
var slide26 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q87PPBQ/s26.jpg?pub_secret=38765c03e3)';
var slide27 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q8BALTA/s27.jpg?pub_secret=6d0fb03043)';
var slide28 = 'url(https://files.slack.com/files-pri/T086L74T1-F1Q85KTD2/s28.jpg?pub_secret=b821d50c9a)';
var slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13, slide14, slide15, slide16, slide17, slide18, slide19, slide20, slide21, slide22, slide23, slide24, slide25, slide26, slide27, slide28]; //array
   var step = 0; //first index of array
    function slideShow() {
      selim.style.backgroundImage = slides[step]; //read index
      if (step < (slides.length-1)) //slide number
        step++;
      else
        step = 0;
      setTimeout("slideShow()", 3000); <AR: `setTimeout` takes a function to run, not a function call, so this should read slideShow (note the absence of `()` and `"`) https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout
    };
    slideShow();
*/


/*
function selimVideo() {
    var selim = document.querySelector('#selim .headshot');
    var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
        x.setAttribute("src","https://files.slack.com/files-pri/T086L74T1-F1Q9SN0T0/download/selim.mp4?pub_secret=23733ccacc"); //here's the file... tried it from local store
    } else {
        x.setAttribute("src","movie.ogg");
    }
    selim.style.backgroundImage.appendChild(x); <AR: `appendChild` is used on an element (e.g. `selim`), not a `backgroundImage`: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
}
*/

/*var selim = document.querySelector('#selim .headshot');
        var selimVideo = new Video('../images/selim.mp4'); // https://files.slack.com/files-pri/T086L74T1-F1Q9SN0T0/download/selim.mp4?pub_secret=23733ccacc
        selim.addEventListener('mousedown', function(event) {
            selimVideo.play();
        });
        selim.addEventListener('mouseup', function(event) {
            selimVideo.pause();
        });
*/