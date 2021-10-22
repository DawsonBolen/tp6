window.onload = function() {
  
  document.querySelector("#banan").classList.add("tp6");
  
  document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("showMe");
  }
  
  document.querySelector("#equipment").onclick = function() {
    document.querySelector("#equipment ul").classList.toggle("showMe");
  }
  
  document.querySelector("#directions").onclick = function() {
    document.querySelector("#directions ol").classList.toggle("showMe");
  }
  
  
  document.querySelector("#banan").onclick = function() {
    this.classList.toggle("tp6")
  }
  
  document.querrySelector("#copyright").innerHTML +="<p>This Recipe is not mine and was used by me for the purpose of a project for DTC 477 at WSU.</p>"
  
  
} //end of window.onload