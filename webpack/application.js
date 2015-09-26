var oldLoad = window.onload;

window.onload = function() {
  document.getElementById("webpack").innerHTML = "Webpack works!";

  if (oldLoad) {
    oldLoad();
  }
};

