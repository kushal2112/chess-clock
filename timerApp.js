'use strict';

// console.log(document.querySelector('.msg').textContent);
document.querySelector('.start').textContent;
document.querySelector('.stop');

let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let resetButton = document.querySelector('.reset');
let addButton = document.querySelector('.add');
let subButton = document.querySelector('.sub');

let msgShow;
let x = 5;
let sec = 59;
let min = 24;
let timerShow;
let timerShow12;
let clearT1;
let clearT12;
let m1;



function T12() {
    sec = 60;
    return min = 24;
}

function T15() {
    min = min + 5;
    return min;
}

function T5() {
    min = min - 5;
    return min;
}

function T2() {
    clearT1 = setInterval(T1, 1000);
    // clearT12 = setInterval(T12, 60000);

    function T1() {
        sec--;
        timerShow = sec + " " + "s";
        msgShow = timerShow;
        console.log(timerShow12);

        if (sec <= 0) {
            sec = 59;
            min--;
            console.log(`min is ${min}`)
        }
        timerShow12 = min + " " + "m";
        document.querySelector('.msg2').textContent = `${timerShow12} : ${msgShow} `
        // document.querySelector('.msg').textContent = msgShow;
    }
}



startButton.addEventListener('click', T2);
resetButton.addEventListener('click', T12);
addButton.addEventListener('click', T15);
subButton.addEventListener('click', T5);

function T1stop() {
    clearInterval(clearT1);
    clearInterval(clearT12)
}

stopButton.addEventListener('click', T1stop);
let a = "der";
let b = "das";
let c = "dem";
let e = "change in 4th";

console.log(min)

// console.log(document.querySelector('.reset').textContent);
// console.log(document.querySelector('.add').textContent);
// console.log(document.querySelector('.sub').textContent);

console.log("hiii");
console.log("master2");
