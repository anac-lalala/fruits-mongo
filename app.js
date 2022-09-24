const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit.",
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37,
});

// person.save();

const kiwy = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "The best fruit!",
});

const orange = new Fruit({
  name: "Orange",
  rating: 10,
  review: "Citric and sou :)",
});

const banana = new Fruit({
  name: "Banana",
  rating: 6,
  review: "To sweet but greener is best",
});

// Fruit.insertMany([kiwy, orange, banana], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("success adding to fruitsDB");
//   }
// });

Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    mongoose.disconnect();

    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});
