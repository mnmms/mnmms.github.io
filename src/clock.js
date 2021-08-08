import "./styles.css";

const clock = document.querySelector("h1#clock");

const BIG_SIZE = "big-size";

const showClock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.classList.add(BIG_SIZE);
  clock.innerText = `${hours}:${minutes}:${seconds}`;
};

setInterval(showClock, 1000);
