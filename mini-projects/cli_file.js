const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fileCreation = () => {
    rl.question('Enter your filename: ', (filename) => {
        rl.question('Enter the content for your file: ', (content) => {
            fs.writeFile(`${filename}.txt`, content, (err) => {
                if (err) {
                    console.error(`Error writing the file: ${err.message}`);
                } else {
                    console.log(`File "${filename}.txt" created successfully!`);
                }
                rl.close();
            });
        });
    });
};

console.log("Welcome to CLI File Creator!");
fileCreation();