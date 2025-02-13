import squidImage from "../assets/images/background.jpg";

export default function loadHome() {
  const container = document.querySelector("#content");
  container.style.background = `url(${squidImage}) no-repeat center 25% / cover`;
  container.replaceChildren();
}
