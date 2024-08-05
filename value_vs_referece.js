const flight = "LH234";
const waheb = {
  name: "Waheb Benzaid",
  passport: 312654987,
};

const checkIn = function (flightName, passenger) {
  flightName = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 312654987) {
    console.log("Correct passport, Checked in!");
  } else {
    console.log("Wrong passport!");
  }
};

// checkIn(flight, waheb);

// console.log("the flight : ");

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(waheb);

checkIn(flight, waheb);
