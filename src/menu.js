export function menu() {
  const content = document.getElementById("content");
  const title = document.createElement("h1");
  title.textContent = "Feast yer eyes";
  content.appendChild(title);
  const foodOne = document.createElement("h2");
  foodOne.textContent = "Salad";
  content.appendChild(foodOne);
  const foodOneDescription = document.createElement("p");
  foodOneDescription.textContent = "One tomato. Two cucumbers. Pine seeds.";
  content.appendChild(foodOneDescription);
  const foodTwo = document.createElement("h2");
  foodTwo.textContent = "Soup";
  content.appendChild(foodTwo);
  const foodTwoDescription = document.createElement("p");
  foodTwoDescription.textContent = "A pumpkin. Blended. And bread.";
  content.appendChild(foodTwoDescription);
  const foodThree = document.createElement("h2");
  foodThree.textContent = "Dessert";
  content.appendChild(foodThree);
  const foodThreeDescription = document.createElement("p");
  foodThreeDescription.textContent = "Sugar. Sweet.";
  content.appendChild(foodThreeDescription);
  const p = document.createElement("p");
  p.textContent = "You might ask yourself: \"Why are they the best?\" Well, the answer is simple. It's because we have so much food!"
  content.appendChild(p);
};
