const address = {
  street: "47",
  city: "Attock",
  country: "Pakistan",
};

//Typical
const Tstreet = address.street;
const Tcity = address.city;
const Tcountry = address.country;

//Object Destructing
const { street: st, city, country } = address;

console.log(st);
