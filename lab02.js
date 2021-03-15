'use strict';

let named = prompt("Please enter your name");

alert("Welcome Mr/Ms " +named.toUpperCase()+'\n'+" Let's starting the guessing game! by answering the following questions with yes/no or y/n");


let type = prompt(" Ready?!!");
if (type.toLocaleLowerCase() === 'yes' || type.toLocaleLowerCase() === 'y')
{
  let gender= prompt("Iam a 40 years old female!");
  if (gender.toLocaleLowerCase() === 'yes' || gender.toLocaleLowerCase() === 'y')
  {alert("Ooh, that's not true, Iam 27years old female");}
  else{ alert("you guessed that, Iam not ");}

  let career= prompt("Iam a prof. programmer");
  if (career.toLocaleLowerCase() === 'yes' || career.toLocaleLowerCase() === 'y')
  {alert("unfortunutly No! Iam still a beginner and try to be that");}
  else{ alert("you guessed that, Iam still a student ");}

  let prefer= prompt("I prefer an online shopping mode");
  if (prefer.toLocaleLowerCase() === 'yes' || prefer.toLocaleLowerCase() === 'y')
  {alert("Oh Oh, absolutly no, because I faced a previous bad experiences, unfortunutly!!");}
  else{ alert("exactly, I prefer the in store shopping mode");}

  let colory= prompt("My favourite color is black");
  if (colory.toLocaleLowerCase() === 'yes' || colory.toLocaleLowerCase() === 'y')
  {alert("No, it is the pink");}
  else{ alert("yeah, it is not my favourite one");}


  let sweets= prompt("the sweets is my lovely snack");
  if (sweets.toLocaleLowerCase() === 'yes' || sweets.toLocaleLowerCase() === 'y')
  {alert("yeah, I really love it");}
  else{ alert("you didn't guess that, actually I prefer it");}
}
else { alert("you can try another time");}



alert("very nice to share me Mr/Ms " + named + " Thank you♥");

console.log("nexttime");


