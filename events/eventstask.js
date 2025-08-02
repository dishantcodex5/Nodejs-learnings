//? Challenge: "Event Maestro: Handle It All!"



//! Objective
//* Create a program using Node.js EventEmitter that:

//? Listens for multiple types of user events (e.g., login, logout, purchase, and profile update).
//? Tracks how many times each event is emitted.
//? Logs a summary of all event occurrences when a special summary event is triggered.

//! Requirements
//? Create at least four custom events (e.g., user-login, user-logout, user-purchase, profile-update).
//? Emit these events multiple times with different arguments (e.g., username, item purchased).
//? Track and store the count of each event type.
//? Define a summary event that logs a detailed report of how many times each event was triggered.

const EventEmitter=require('events')
const emitter= new EventEmitter();

const evencounts={
    "user-login":0,
    "user-logout":0,
    "user-purchase":0,
    "profile-update":0,
};

emitter.on("user-login",(username)=>{
    evencounts['user-login']++
    console.log(`${username} is just logged in!`);
})

emitter.on("user-logout",(username)=>{
    evencounts['user-logout']++
    console.log(`${username} has been logged out just few minutes ago `);
});
emitter.on("user-purchase",(username)=>{
    evencounts['user-purchase']++
    console.log(`${username} have purchased this laptop`);
});
emitter.on("profile-update",(username)=>{
     evencounts['profile-update']++
    console.log(`${username} please update your profile`);
});
emitter.on("summery",()=>{
    console.log(evencounts);
})

emitter.emit("user-login","dishant")
emitter.emit("user-logout",'dishant')
emitter.emit("user-purchase","dishant","laptop")
emitter.emit("profile-update","dishant")
emitter.emit("summery")
