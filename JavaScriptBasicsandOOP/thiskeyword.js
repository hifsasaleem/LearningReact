//reference to the current object

const person = {
  name: "Hifsa",
  walk() {
    console.log(this);
  },
};

person.walk();

const walk = person.walk;
console.log(walk);
walk();
