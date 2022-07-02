//old way
const square = function (number) {
  return number * number;
};
//Arrow function
const squareA = (number) => number * number;
console.log(square(5));
console.log(squareA(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter(function (job) {
  return job.isActive;
});

const notactiveJob = jobs.filter((job) => job.isActive);
console.log(notactiveJob);
console.log(activeJobs);
