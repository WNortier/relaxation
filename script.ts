const container = document.getElementById("container") as HTMLDivElement;
const text = document.getElementById("text") as HTMLParagraphElement;
const btn = document.getElementById("btn") as HTMLButtonElement;
const pointerContainer = document.querySelector(
  ".pointer-container"
) as HTMLButtonElement;

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
const running = false;
btn.style.opacity = "1";

btn.addEventListener("click", () => {
  btn.style.opacity = "0";
  btn.style.animation = "disappear 1s";
  setTimeout(() => {
    btn.style.display = "none";
  }, 1025);
  pointerContainer.style.top = "-40px";
  pointerContainer.style.left = "140px";
  const breathAnimation = (): any => {
    text.innerText = "Breath In!";
    container.className = "container grow";
    setTimeout(() => {
      text.innerText = "Hold!";
      setTimeout(() => {
        text.innerText = "Breath Out!";
        container.className = "container shrink";
      }, holdTime);
    }, breathTime);
  };
  pointerContainer.style.animation = "rotate 7.5s linear forwards infinite";
  breathAnimation();
  setInterval(breathAnimation, totalTime);
});
