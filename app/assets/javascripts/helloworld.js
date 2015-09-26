var oldLoad = window.onload;
window.onload = function() {
  document.getElementById("sprockets").innerHTML = "Sprockets works!";

  if(oldLoad) {
    oldLoad();
  }
};
