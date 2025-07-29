const { dir } = require("console");
const path = require("path");
console.log(__dirname);
console.log(__filename);

const filepath=path.join("student","folder","data.txt");
console.log(filepath)    //path.join 


const parsedata=path.parse(filepath);
const resolvedData=path.resolve(filepath);
const extname=path.extname(filepath);
const basename=path.basename(filepath);
const dirName=path.dirname(filepath);

console.log({parsedata,resolvedData,extname,basename,dirName});