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
  var vid = document.querySelector("#video");
    selim.style.backgroundImage = 'url(images/s28.jpg)';
    selim.addEventListener('onclick', function() {
      video.play();
    });
    selim.addEventListener('mouseout', function() {
    selim.style.backgroundImage = 'url(images/selimPhoto150.jpg)';
  });   
 };
