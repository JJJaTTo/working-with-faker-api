import { faker } from "https://cdn.skypack.dev/@faker-js/faker";
console.clear();
const ul = document.querySelector("ul");
const input = document.querySelector("#names");
const people = [];

for (let i = 0; i < 300; i++) {
  people.push({
    name: faker.person.firstName(),
    age: Math.round(Math.random() * 23),
    favoriteColor: faker.color.human()
  });
}

people.forEach((person) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <h4>${person.name}</h4>
    <div>
      <div>Age: <span>${person.age}</span></div>
      <div>
        Favorite color: <span>${person.favoriteColor}</span>
      </div>
    </div>
  `;
  ul.appendChild(li);
});

input.addEventListener("input", function (e) {
  const { value } = e.target;
  const filteredPeople = people.filter(function (person) {
    return person.name.toLowerCase().includes(value.toLowerCase());
  });
  console.log(filteredPeople.length);
});