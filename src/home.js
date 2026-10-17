import foodImg from "./img/food.png";

export function home() {
  const content = document.getElementById("content");
  const title = document.createElement("h1");
  title.textContent = "Look at all that food wow";
  content.appendChild(title);
  const img = document.createElement("img");
  img.src = foodImg;
  img.alt = "A lot of food";
  content.appendChild(img);
  const p = document.createElement("p");
  p.textContent = "You might ask yourself: \"Why are they the best?\" Well, the answer is simple. It's because we have so much food!"
  content.appendChild(p);
};
