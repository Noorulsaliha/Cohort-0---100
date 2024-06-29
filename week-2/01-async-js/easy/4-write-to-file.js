// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.




const fs = require('fs');

fs.writeFile('C:\Users\Welcome\Documents\Cohort 0 - 100\Assignment (Week - 1)\a.txt', "Hello World!", (err,data)=>{
    if(err){
        console.log("Not saved");
    }
    console.log("Data has been succesfully added");

    fs.readFile('C:\Users\Welcome\Documents\Cohort 0 - 100\Assignment (Week - 1)\a.txt', 'utf8', (err,data)=>{
        if(err){
            console.log("Error Occured");
        }
        console.log(data);
    })
})