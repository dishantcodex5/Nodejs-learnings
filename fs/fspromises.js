const fs=require('fs')
const path=require('path')

// Why .then() and .catch():
// .then() ensures clear chaining of multiple asynchronous operations.
// .catch() centralizes error handling, making it easy to debug and manage failures.

const fileName='fspromises.txt'
const filePath=path.join(__dirname,fileName)

const file = __dirname;
fs.promises
.readdir(file)
.then ((data)=>console.log(data))
.catch((err)=>console.error(err));


const filePath1 = __dirname;
fs.promises
.readdir(filePath1)
.then((data)=>console.log(data))
.catch((err)=> console.error(err));

// ---
// Create (Write a File): fs.promises.writeFile
// Creates or overwrites a file with specified content.
// The writeFile() method writes data to a file asynchronously.
// If the file does not exist, it is created.
// If it exists, its content is replaced.

// Syntax: fs.promises.writeFile(path, data, options).then().catch();
//   path: Path to the file.
//   data: Content to write.
//   options: Encoding ('utf8'), flags, etc. (optional).


fs.promises
.writeFile(filePath,"this is the intial data",'utf-8')
.then(console.log("file created successfully "))
.catch((err)=> console.log(err));




fs.promises
.appendFile(filePath,"\nthis is the updated data",'utf-8')
.then(console.log("file updated succfully"))
.catch((err)=> console.error(err))

fs.promises
.readFile(filePath,'utf-8')
.then((data)=>console.log(data))
.catch((err)=>console.error(err))

fs.promises
.unlink(filePath,'utf-8')
.then(console.log("file deleted"))
.catch((err)=>console.error(err))