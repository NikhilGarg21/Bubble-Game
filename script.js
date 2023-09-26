var hitrm;
var rn;
var clientWidth = document.getElementById('pbtm').clientWidth;
function bubbleshow() {
    var clutter = "";
    for (var index = 0; index <=(clientWidth/20)*2.6; index++) {
        hitrm = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${hitrm}</div>`;
    }
    document.querySelector("#pbtm>.bubbless").innerHTML = clutter;
}

function getnewhit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = rn;
}

var time =3 ;
function runtim(){
    setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector("#timer2").textContent = time;
            document.querySelector("#timer").style.opacity = 0;
            document.querySelector("#hit").style.opacity = 0;
            document.querySelector("#score").style.opacity = 0;
        }
        else {
            clearInterval(time);
            document.querySelector("#hit").style.opacity = 1;
            document.querySelector("#score").style.opacity = 1;
            document.querySelector("#timer").style.opacity = 1;
            var bubbleElements = document.querySelectorAll("#pbtm .bubbless");
            bubbleElements.forEach(function (element) {
                element.style.opacity = "1";
            });
            var endElemen = document.querySelector(".play");
            endElemen.style.opacity = "0";
            document.querySelector("#pbtm>.end>h4>#score").textContent = score;
        };
    }, 1000);
    runtimer();
};

var timer = 64;
function runtimer() {
    setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else {
            clearInterval(timer);
            var bubbleElements = document.querySelectorAll("#pbtm .bubble");
            bubbleElements.forEach(function (element) {
                element.style.opacity = "0";
            });
            var endElement = document.querySelector(".end");
            endElement.style.opacity = "1";
            document.querySelector("#pbtm>.end>h4>#score").textContent = score;
            document.querySelector("#pbtm>.end>h4>#score").style.opacity = 1;
        };
    }, 1000);
};

var score = 0;
function scorerunner() {

    score += 10;
    document.querySelector("#score").textContent = score;
}
var fn;
document.querySelector("#pbtm")
    .addEventListener("click", function (dets) {
        fn = Number(dets.target.textContent);
        if (rn == fn) {
            scorerunner();
            getnewhit();
            bubbleshow();
        }
    })

document.querySelector("#pbtm>.end>.btn")
    .addEventListener("click", function () {
        timer = 64;
        time=4;
        document.querySelector("#score").textContent = 0;
        score=0;
        var endElement = document.querySelector(".end");
        endElement.style.opacity = "0";
        var endElement = document.querySelector(".bubbless");
        endElement.style.opacity = "0";
        var endElemen = document.querySelector(".play");
        endElemen.style.opacity = "1";
        getnewhit();
        bubbleshow();
    });



var sc = Number(document.querySelector("#score").textContent);
const changingElement = document.getElementById('changingElement');
        
const interval = setInterval(() => {
    console.log('Current value:', sc);
}, 1000);


setTimeout(() => {
    clearInterval(interval);
    console.log('Interval stopped');
}, 10000);
getnewhit();
bubbleshow();
runtim();