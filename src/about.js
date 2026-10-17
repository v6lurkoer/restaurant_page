export function about() {
  const content = document.getElementById("content");
  const title = document.createElement("h1");
  title.textContent = "All about food";
  content.appendChild(title);
  const p = document.createElement("p");
  p.textContent = "It's nutritious."
  content.appendChild(p);
  const contact = document.createElement("p");
  p.textContent = "For orders please contact us via email tasty@food.com or phone 555-555-555. Thanks!"
  content.appendChild(p);
};
