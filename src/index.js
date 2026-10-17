import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
import "./style.css";

home();

const nav = document.querySelector("nav");
nav.addEventListener("click", (e) => {
  content.textContent = "";
  if (e.target.id === "home") {
    home();
  } else if (e.target.id === "menu") {
    menu();
  } else if (e.target.id === "about") {
    about();
  }
});
