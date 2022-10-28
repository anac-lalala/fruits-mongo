const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  // keepAlive: false,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Oh nono you forgot the name of the fruit D:"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "this person neads a name"],
  },
  age: {
    type: Number,
  },
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", peopleSchema);

const pear = new Fruit({
  name: "Pear",
  rating: 3,
  review: "Not so popular as a fruit",
});

const person = new Person({
  name: "Paul",
  rating: 31,
});

// pear.save(function (err, result) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

// person.save();

Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    console.log(fruits);
    // fruits.forEach((fruit) => {
    //   console.log(fruit.name);
    // });
    mongoose.disconnect(function () {
      console.log("Mongoose connection disconnected");
    });
  }
});
