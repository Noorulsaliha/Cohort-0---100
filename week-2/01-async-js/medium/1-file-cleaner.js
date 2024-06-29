// <!-- ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ``` -->

// String containing multiple spaces


const fs = require('fs')
fs.readFile('file.txt', 'utf-8', (err,data) => {
    console.log(data);
    let change = data.replace(/\s+/g,' ');
    fs.writeFile('file.txt', change, (err, data)=>{
        if(err){
            console.log("File Not Modified");
        }
        console.log(change);
        console.log("File Modified Succesffully");
    })
});
















