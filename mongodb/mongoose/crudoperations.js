import mongoose from "mongoose";

// step 1: to connect to the mongoDB server
try {
  await mongoose.connect("mongodb://127.0.0.1/mongodb_database");
//   mongoose.set("debug", true);
} catch (error) {
  console.error(error);
  process.exit();
} 


//step 2 

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true, min: 5 },
  createdAt: { type: Date, default: Date.now }
});

// step 2: creating a model
const Users = mongoose.model("user", userSchema);

// await Users.create({ name: "thapa", age: 31, email: "thapa@technical.com" });
const usersData = [
  { name: "Alice",   email: "alice@example.com",   age: 25 },
  { name: "Bob",     email: "bob@example.com",     age: 30 },
  { name: "Charlie", email: "charlie@example.com", age: 35 },
];

// await Users.insertMany(usersData);


//? step 2: Read
// const users = await Users.find();

// const users = await Users.find({ age: { $gt: 30 } });
// console.log(users);

//? step 3: Update
const updatedUser = await Users.updateOne(
  { email: "bob@example.com" },
  // { $set: { age: 32 } }
  { $inc: { age: 5 } }
);
console.log(updatedUser);

//? step 4: Delete
const deletedUser = await Users.deleteOne({ email: "bob@example.com" });
console.log(deletedUser);


await mongoose.connection.close();
