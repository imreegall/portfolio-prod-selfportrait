window.setInterval(function () {
  var now = new Date();
  var clock = document.getElementById("data");
  clock.innerHTML =
    "<h1>" +
    now.toLocaleTimeString() +
    "</h1>" +
    "<h2>" +
    now.getDate() +
    "." +
    (now.getMonth() + 1) +
    "." +
    now.getFullYear() +
    "</h2>";
}, 1000);


const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};