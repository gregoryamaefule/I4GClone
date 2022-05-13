var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    
    if(this.classList.contains('active'))
    {this.classList.remove("active");
    var panel = this.nextElementSibling;
    panel.style.display = "none";
  
  }
    else{

    for (i=0; i < acc.length; i++){
        var pan = acc[i].nextElementSibling;
        pan.style.display = "none";
        acc[i].classList.remove("active")
    }
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  }
  });
}