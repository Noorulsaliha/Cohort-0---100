// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 
let time = new Date();
let hours = time.getHours();
let AMPM = hours >= 12 ? "PM" : "AM";

let newHours = hours % 12;
let hours1 = newHours ? newHours : 12; 
console.log(time.getHours()+":"+time.getMinutes()+":"+time.getSeconds());
console.log(hours1+":"+time.getMinutes()+":"+time.getSeconds()+' '+AMPM);