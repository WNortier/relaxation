"use strict";
var container = document.getElementById("container");
var text = document.getElementById("text");
var btn = document.getElementById("btn");
var pointerContainer = document.querySelector(".pointer-container");
var totalTime = 7500;
var breathTime = (totalTime / 5) * 2;
var holdTime = totalTime / 5;
var running = false;
var vid = document.getElementById("my-video");
vid.volume = 0.5;
btn.style.opacity = "1";
btn.addEventListener("click", function () {
    btn.style.opacity = "0";
    btn.style.animation = "disappear 1s";
    setTimeout(function () {
        btn.style.display = "none";
    }, 1025);
    pointerContainer.style.top = "-40px";
    pointerContainer.style.left = "140px";
    var breathAnimation = function () {
        text.innerText = "Breath In!";
        container.className = "container grow";
        setTimeout(function () {
            text.innerText = "Hold!";
            setTimeout(function () {
                text.innerText = "Breath Out!";
                container.className = "container shrink";
            }, holdTime);
        }, breathTime);
    };
    pointerContainer.style.animation = "rotate 7.5s linear forwards infinite";
    breathAnimation();
    setInterval(breathAnimation, totalTime);
});
