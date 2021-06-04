function oneWay() {
    var onewayCheck = document.getElementById("returntravel").setAttribute("Disabled","");
} 

function roundTrip() {
    var roundtrip = document.getElementById("returntravel").removeAttribute("Disabled","");
}

AOS.init();

var depart = new Pikaday({ field: document.getElementById("depart") });
var returnTravel = new Pikaday({ field: document.getElementById("returntravel") });

window.addEventListener('scroll',(e)=>{
        const nav = document.querySelector('.navbar');
        if(window.pageYOffset>0){
          nav.classList.add("add-shadow");
        }else{
          nav.classList.remove("add-shadow");
        }
      });

function showTimeline() {
  var showTml = document.getElementById('timeline');
  if (showTml.style.display === "none") {
    showTml.style.display = "block";
  } else {
    showTml.style.display = "none";
  }
}

function showRoute() {
  var show = document.getElementById('timeline-detail')
  var hide = document.getElementById('detail-price-train')

  if(show.style.display === "none") {
    show.style.display = "block";
    hide.style.display = "none";
  } else {
    show.style.display = "none;"
  }
}

function showPrice() {
  var show = document.getElementById('timeline-detail')
  var hide = document.getElementById('detail-price-train')

  if(hide.style.display === "none") {
    hide.style.display = "block";
    show.style.display = "none";
  } else {
    hide.style.display = "none;"
  }
}