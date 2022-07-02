const colors = ["red", "green", "blue"];
const items = colors.map((color) => "<li>" + color + "</li>");
const items2 = colors.map((color) => `<li>${color}</li>`);
console.log(items);
console.log(items2);
