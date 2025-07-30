const fs=require('fs')
const path = require('path')

const fileName= 'fasync.txt'
const filePath=path.join(__dirname,fileName);

//* fs.writeFileSync(): Writes data to a file. If the file does not exist, it will be created. If the file exists, it overwrites the content.

//! syntax: fs.writeFileSync(filePath, data, options,callback);

//? filePath: The file path to write to.

//? data: The content to write to the file.

//? options: Optional. Includes encoding ('utf8'), mode, or flags.


fs.writeFile(filePath,"this is the intial data",'utf-8',
    (err)=>{
    if(err) console.error(err);
    else console.log("the file has been saved");
});

//* fs.readFile(): Reads the contents of a file asynchronously and returns the data as a buffer or string.
//! syntax: fs.readFile(path, options, callback);

//? path: File path to read from.
//? options: Optional. An object or string specifying the encoding ('utf8') or flag ('r' for reading).
//? callback: A function with parameters (err, data).

fs.readFile(filePath,"utf-8",(err,data)=>{
    if(err) console.error(err);
    else console.log(data);
})

//* fs.appendFile(): Appends data to a file. If the file doesn’t exist, it is created.
//! syntax: fs.appendFile(path, data, options, callback);

fs.appendFile(filePath,"\n this is the updated data",'utf-8',(err)=>{
    if (err) console.error(err)
    else console.log("file has been updated")
});

//* fs.unlink(): Deletes a file asynchronously.
//! syntax: fs.unlink(path, callback);

// Example:
// fs.unlink(filePath, (err) => {
//   if (err) console.error(err);
//   else console.log("File deleted successfully");
// });