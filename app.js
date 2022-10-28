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
  favFruit: fruitSchema,
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", peopleSchema);

const blueberry = new Fruit({
  name: "Blueberry",
  rating: 7,
  review: "Somewhat expensive but a superfood",
});

// const person = new Person({
//   name: "Lucy",
//   rating: 33,
//   favFruit: pinapple,
// });

// -------- Creating items inside collections
blueberry.save(function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

// person.save();

// -------- Updating items inside collections

Person.updateOne({ name: "Jhon", favFruit });
// Fruit.updateOne(
//   { _id: "632e6929e1ffd2fd1ad8769f" },
//   { review: "Sweet and citric" },
//   function (err, res) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res);

//       Fruit.find((err, fruits) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(fruits);
//           // fruits.forEach((fruit) => {
//           //   console.log(fruit.name);
//           // });

//           // Closing connection must be after last task
//           mongoose.connection.close(function () {
//             console.log("Mongoose connection disconnected");
//           });
//         }
//       });
//     }
//   }
// );
