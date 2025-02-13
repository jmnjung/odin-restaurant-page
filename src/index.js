import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";
import loadAbout from "./pages/about.js";
import loadForm from "./pages/form.js";

import "./style.css";

const homeBtn = document.querySelector("#home-button");
const menuBtn = document.querySelector("#menu-button");
const aboutBtn = document.querySelector("#about-button");

homeBtn.addEventListener("click", loadHome);
menuBtn.addEventListener("click", loadMenu);
aboutBtn.addEventListener("click", loadAbout);

loadHome();
loadForm();
