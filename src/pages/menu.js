import tteokbokkiImage from "../assets/images/tteokbokki.jpg";
import dalgonaImage from "../assets/images/dalgona.jpg";

function createMenuCard({ imageSrc, imageAlt, name, price }) {
  const img = document.createElement("img");
  img.classList.add("menu-image");
  img.src = imageSrc;
  img.alt = imageAlt;

  const title = document.createElement("div");
  title.classList.add("menu-text");
  title.textContent = name;

  const priceTag = document.createElement("div");
  priceTag.classList.add("menu-text");
  priceTag.textContent = `$${price}`;

  const description = document.createElement("div");
  description.classList.add("menu-description");
  description.appendChild(title);
  description.appendChild(priceTag);

  const card = document.createElement("div");
  card.classList.add("menu-card");
  card.appendChild(img);
  card.appendChild(description);

  return card;
}

export default function loadMenu() {
  const menuItems = [
    {
      imageSrc: tteokbokkiImage,
      imageAlt: "A tray of rice cakes in sweet and spicy red pepper sauce",
      name: "Tteokbokki",
      price: 10,
    },
    {
      imageSrc: dalgonaImage,
      imageAlt: "Four pieces of dalgona candy arranged on a wooden tray",
      name: "Dalgona",
      price: 3,
    },
  ];

  const menuTitle = document.createElement("div");
  menuTitle.classList.add("page-title");
  menuTitle.textContent = "Menu";

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu-content");

  menuItems.forEach((item) => {
    const card = createMenuCard(item);
    menuContainer.appendChild(card);
  });

  const container = document.querySelector("#content");
  container.style.background = "#f46a9b";
  container.replaceChildren(menuTitle, menuContainer);
}
