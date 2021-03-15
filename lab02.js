'use strict';

let named = prompt("Please enter your name");

alert("Welcome Mr/Ms " +named.toUpperCase()+'\n'+" Could you share us with the survey please! by answering the following questions with yes/no");


let type = prompt(" Did your prefer Online shopping?");


if (type.toLocaleLowerCase() === 'yes') {

  prompt("Did you believe that the online shopping mode is more interesting than in store mode?");


  prompt("Is there is any bad previous experience you had been faced with online shopping?");

  prompt("Did you trust the PREPAY mode by visa cards?");

}

else
if (type.toLocaleLowerCase() ==='no') { alert("I advise you to try intersting and time_saving experience with online shopping!"); }





alert("very nice to share us Mr/Ms " + named + " Thank you♥");

console.log("nexttime");


