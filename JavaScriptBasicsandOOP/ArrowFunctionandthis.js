//Arrow Function dont rebind this
const person = {
  talk() {
    var self = this;
    console.log("this", this);
    setTimeout(function () {
      console.log("this", this), 1000;
    });
    setTimeout(function () {
      console.log("self", self), 1000;
    });
    setTimeout(() => {
      console.log("this", this), 1000;
    });
  },
};
person.talk();
