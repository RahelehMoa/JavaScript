function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display == "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "<b>Read more</b>"; 
      // Read more and bold <b></b> variable.innerHTML that is one properties innerHTML.
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "<b>Read less</b>"; 
      // Read Less and bold <b></b> name variable.innerHTML that is one properties innerHTML.
      moreText.style.display = "inline";
    }
  }
  // <!-- What is the diferent between inline and none display?? -->
  // Note:
  // The <script> element uses display: none; as default.
  // display: none; is commonly used with JavaScript to hide and show elements without deleting and recreating them. 