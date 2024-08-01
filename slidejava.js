let slideindex=1;

function slideshow(n) {

  slideindex=n;

  let slides=document.getElementsByClassName("slide");

  let dots=document.getElementsByClassName("dot");

  if (n > slides.length ) { slideindex = 1; }
  if (n < 1) { slideindex = slides.length; }
  
  for (i=0 ; i<slides.length ; i++) {

    slides[i].style.display="none";

}

  for (i=0 ; i < dots.length ; i++ ) {

    dots[i].className = dots[i].className.replace(" active","");    

}
  
  dots[slideindex-1].className += " active";

  slides[slideindex-1].style.display="block";

}

function plusshow(n) {

  slideindex += n;
  slideshow(slideindex);

}

function currentshow(n) {

  slideshow(n);

}