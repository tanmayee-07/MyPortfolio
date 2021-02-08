function openNavbar() {
    document.getElementById("sideNavbar").style.width = "350px";
  }
  
  function closeNavbar() {
    document.getElementById("sideNavbar").style.width = "0";
  }
  const links = document.querySelectorAll(".page-header ul a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";
 
for(const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}
const closeEls = document.querySelectorAll("[data-close]");
 
for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}
 
document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
document.addEventListener("keyup", e => {
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    var parent = document.querySelector('.splitview'),
    topPanel = parent.querySelector('.top'),
    handle = parent.querySelector('.handle');
    parent.addEventListener('mousemove', function(event) {
        // Move the handle.
        handle.style.right = event.clientX + 'px';
 
        // Adjust the top panel width.
        topPanel.style.width = event.clientX + 'px';
});
});
