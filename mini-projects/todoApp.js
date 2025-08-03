const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todos = [];

const showMenu = () => {
    console.log("\n1: Add a Task");
    console.log("2: View Tasks");
    console.log("3: Exit");
    rl.question("Choose an option: ", handleInput);
};

const handleInput = (option) => {
    if (option === "1") {
        rl.question("Enter the Task: ", (task) => {
            todos.push(task);
            console.log("Task added successfully!");
            showMenu();
        });
    } else if (option === "2") {
        if (todos.length === 0) {
            console.log("No tasks found!");
        } else {
            console.log("\nYour Tasks:");
            todos.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }
        showMenu();
    } else if (option === "3") {
        console.log("Goodbye!");
        rl.close();
    } else {
        console.log("Invalid option. Please try again.");
        showMenu();
    }
};

console.log("Welcome to CLI Todo App!");
showMenu();