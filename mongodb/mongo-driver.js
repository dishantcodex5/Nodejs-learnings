import { MongoClient } from "mongodb";
const client=new MongoClient("mongodb://127.0.0.1");
await client.connect();

const db= client.db('mongodb_nodejs');

const usercollection=db.collection('users');

// usercollection.insertOne({name:"dishant",age:19});
// usercollection.insertMany([
//     {name:'technical',role:'user',age:12},
//     {name:'vedant',role:'student',age:20},
// ])

//read

// const usersCursor=usercollection.find();
// // console.log(usersCursor);

// for await(const user of usersCursor){
//     console.log(user);
// }

// const usersCursor=await usercollection.find().toArray();
// console.log(usersCursor)

// const user =await usercollection.findOne({name:'dishant'})
// console.log(user);
// console.log(user._id.toHexString())

// await usercollection.updateOne({name:'dishant'},{$set:{age:20}});

//delete 

await usercollection.deleteOne({name:'vedant'});

