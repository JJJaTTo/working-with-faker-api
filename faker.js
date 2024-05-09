
import { faker } from 'https://esm.sh/@faker-js/faker';


function CreatePerson() {
  return {
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    email: faker.internet.email(),
    sex: faker.person.sexType(),
    age: Math.round(Math.random(10) * 30),
    subscriptionTier: faker.helpers.arrayElement(['free', 'basic', 'business']),
  }

};

const people = [];

for (let i = 0; i < 5; i++) {
  people.push(CreatePerson())
};

const ul = document.querySelector('ul')
function createPeople() {
  people.forEach(({ name, age, email, avatar, sex }) => {
    const li = document.createElement('li')
    li.innerHTML += `
    <h4>Name:${name}</h4>
    <img src="${avatar}" width='80px'>
    <div>
    <div>Age: <span>${age}</span></div>
      <div>
    <div>Sex: <span>${sex}</span></div>
      <div>
        email: <span>${email}</span>
      </div>
    </div>`;
    ul.appendChild(li);
  });
};
createPeople();
const showMore = document.querySelector('.show-more');
showMore.addEventListener('click', () => {
  createPeople()
});

const input = document.querySelector('input');

input.addEventListener('input', (e) => {

  const sortBy = document.querySelector('select');
  let {value} = e.target;
  console.log(typeof sortBy.value)

  // if (sortBy.value) {

  //   const filteredPeople = people.filter((person) => {
  //     return person.name.toLowerCase().includes(value.toLowerCase());
  //   });
  //   console.log('value is string', filteredPeople)
  // }else{


  // const filteredPeople = people.filter((person) => {
  //   return person.age === value;
  // });

  // console.log(filteredPeople)
}
});