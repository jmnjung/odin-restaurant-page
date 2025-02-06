export default function loadAbout() {
  const firstParagraph = document.createElement("div");
  firstParagraph.classList.add("about-text");
  firstParagraph.textContent =
    "Step into a world of bold flavors and playful challenges! Our menu brings " +
    "the best of Korea right to your plate, featuring the beloved tteokbokki " +
    "and the sweet, nostalgic delight of dalgona. Inspired by the thrill of " +
    "Korean shows, we promise you'll be in for an experience that's all about " +
    "fun and food without life-or-death stakes!";

  const secondParagraph = document.createElement("div");
  secondParagraph.classList.add("about-text");
  secondParagraph.textContent =
    "Take on the dalgona challenge: if you can perfectly carve out the shape, " +
    "we'll treat you to another round for free! But don't worry if it doesn't " +
    "go as planned, there's no harm done and just come back and try again.";

  const thirdParagraph = document.createElement("div");
  thirdParagraph.classList.add("about-text");
  thirdParagraph.textContent =
    "Join us for a unique dining experience where the only thing you're " +
    "playing for is more delicious treats.";

  const fourthParagraph = document.createElement("div");
  fourthParagraph.classList.add("about-text");
  fourthParagraph.textContent =
    "Photos are provided by Justt_me on GoodFon, " +
    "Ministry of Culture, Sports and Tourism of South Korea on Flickr, " +
    "and Wikimedia Commons.";

  const aboutTitle = document.createElement("div");
  aboutTitle.classList.add("page-title");
  aboutTitle.textContent = "About";

  const textContainer = document.createElement("div");
  textContainer.setAttribute("id", "about-content");
  textContainer.appendChild(firstParagraph);
  textContainer.appendChild(secondParagraph);
  textContainer.appendChild(thirdParagraph);
  textContainer.appendChild(fourthParagraph);

  const container = document.querySelector("#content");
  container.style.background = "#f46a9b";
  container.replaceChildren(aboutTitle, textContainer);
}
