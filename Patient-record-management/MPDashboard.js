document.getElementById("logout").addEventListener("click", function(event) {
    event.preventDefault();
    // Add logout logic here
  });
  
  var sidebarLinks = document.querySelectorAll(".sidebar a");
  sidebarLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      var sectionId = this.getAttribute("data-section");
      var sections = document.querySelectorAll("section");
      sections.forEach(function(section) {
        if (section.id === sectionId) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
  
      var overlay = document.querySelector(".overlay");
      overlay.classList.add("show");
  
      var popup = document.createElement("div");
      popup.classList.add("popup");
      popup.innerHTML = "<h3>Loading...</h3>"; // Replace with actual content or AJAX call
      document.body.appendChild(popup);
    });
  });
  
  document.querySelector(".overlay").addEventListener("click", function() {
    this.classList.remove("show");
    var popup = document.querySelector(".popup");
    popup.parentNode.removeChild(popup);
  });
  
  window.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector(".container");
    container.classList.add("show");
  });
  