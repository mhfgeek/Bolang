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