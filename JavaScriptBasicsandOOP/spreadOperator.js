const first = [1, 2, 3];
const second = [4, 5, 6];

const clone = [...first];
//Old way
const combined = first.concat(second);
//using spread operator
const combine = [...first, "a", ...second, "b"];

const firstObject = { name: "Hifsa" };
const secondObject = { job: "Software Engineer" };
const combinedObject = {
  ...firstObject,
  ...secondObject,
  location: "Pakistan",
};

console.log(combinedObject);
