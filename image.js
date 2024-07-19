const prompt = require('prompt-sync')();

let filename = prompt("Enter Filename:");
filename = filename.toLowerCase();
//let extension = filename.slice(filename.length-3);
let extension = filename.slice(-3);

if (extension == 'jpg' || extension == 'png'){
    console.log("This is an image file");
}