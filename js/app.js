'use strict';
console.log('Hi');
let score=0;
//__________________________________________________
///*Question 1-5 lab03 16 mars//

let named = prompt('Please enter your name');

alert('Welcome 🤩 Mr/Ms ' +named.toUpperCase()+'\n'+' Lets starting the guessing game! by answering the following questions with yes/no or y/n');


let type = prompt('Ready?!! 👏 ');
if (type.toLocaleLowerCase() === 'yes' || type.toLocaleLowerCase() === 'y')
{
  let gender= prompt('Iam a 70 years old 👵 !');
  if (gender.toLocaleLowerCase() === 'no' || gender.toLocaleLowerCase() === 'n')
  {
    console.log('your answer is '+ gender+ '\n'+ 'correct 😃 , Iam 27 years old ');
    alert('your answer is '+ gender+ '\n'+ 'correct 😃 , Iam 27 years old ');
    score++;
  }

  else if (gender.toLocaleLowerCase() === 'yes' || gender.toLocaleLowerCase() === 'y')
  {
    console.log('your answer is '+ gender+ '\n'+ 'thats not correct, Iam not 70 ');
    alert('your answer is '+ gender+ '\n'+ 'thats not correct, Iam not 70 ');
    score++;
  }


  //_______________________________________________________________________________________________________________-

  let career= prompt('Iam a prof. programmer');
  if (career.toLocaleLowerCase() === 'yes' || career.toLocaleLowerCase() === 'y')
  {
    console.log('your answer is '+ career+ '\n'+ 'incorrect.. unfortunutly No! Iam still a beginner and try to be that');
    alert('your answer is '+ career+ '\n'+ 'incorrect.. unfortunutly No! Iam still a beginner and try to be that');
  }



  else if (career.toLocaleLowerCase() === 'no' || career.toLocaleLowerCase() === 'n')
  {
    console.log('your answer is '+ career+ '\n'+ 'correct.. you guessed that, Iam still a student');
    alert('your answer is '+ career+ '\n'+ 'correct.. you guessed that, Iam still a student ');

    score++; }

  //_______________________________________________________________________________________________________________-

  let prefer= prompt('I prefer an online shopping mode');
  if (prefer.toLocaleLowerCase() === 'yes' || prefer.toLocaleLowerCase() === 'y')
  {
    console.log('your answer is '+ prefer+ '\n'+ 'not correct, absolutly no, because I faced a previous bad experiences, unfortunutly!!');
    alert('your answer is '+ prefer+ '\n'+ 'not correct, absolutly no, because I faced a previous bad experiences, unfortunutly!!');
  }

  else if (prefer.toLocaleLowerCase() === 'no' || prefer.toLocaleLowerCase() === 'n')
  {
    console.log('your answer is '+ prefer+ '\n'+'correct.. exactly, I prefer the in store shopping mode');
    alert('your answer is '+ prefer+ '\n'+'correct.. exactly, I prefer the in store shopping mode');
    score++;
  }
  //_______________________________________________________________________________________________________________-


  let colory= prompt('My favourite color is black');
  if (colory.toLocaleLowerCase() === 'yes' || colory.toLocaleLowerCase() === 'y')
  {
    console.log('your answer is '+ colory+ '\n'+ 'not correct.. No, it is the pink');
    alert('your answer is '+ colory+ '\n'+ 'not correct.. No, it is the pink');
  }


  else if (colory.toLocaleLowerCase() === 'no' || colory.toLocaleLowerCase() === 'n')

  {
    console.log('your answer is '+ colory+ '\n'+ 'correct.. yeah, it is not my favourite one');
    alert('your answer is '+ colory+ '\n'+ 'correct.. yeah, it is not my favourite one');

    score++; }
  //_______________________________________________________________________________________________________________-


  let sweets= prompt('the sweets is my lovely snack🍰🍰🍰');

  if (sweets.toLocaleLowerCase() === 'yes' || sweets.toLocaleLowerCase() === 'y')
  {
    console.log('your answer is '+ sweets+ '\n'+ 'correct.. yeah, I really love it');
    alert('your answer is '+ sweets+ '\n'+ 'correct.. yeah, I really love it');

    score++;
  }


  else if (sweets.toLocaleLowerCase() === 'no' || sweets.toLocaleLowerCase() === 'n')
  {
    console.log('your answer is '+ sweets+ '\n'+ 'not correct.. you didnt guess that, actually I Love it');
    alert('your answer is '+ sweets+ '\n'+ 'not correct.. you didnt guess that, actually I Love it');
  }
  else {alert(' you can try later');
  //break;
  }

}



//________________________________________________________________________________________________________________________________________
///*Question 6 lab03 16 mars//


let inputnum= prompt('Now could you Guess haw many flower 🌷 I have own! between 1 and 15, you wil have 4 attempts');
for (let attempt = 4; attempt >= 1; attempt--)
{
  if (Number(inputnum) === 7)
  {
    alert('WOW.. congrates, you guessed it');
    score++;
    break;
  }

  else if (inputnum <= 6)
  {
    alert('Ops.. too low' + '\n' + 'you can try again');

    inputnum= prompt('Now could you Guess haw massny flower I have own! between 1 and 15');
    //alert('Ops.. too low' + '\n' + 'you can try again, you still have '+ attempt+' attempts');

  }

  else
  if (inputnum >= 8)
  {
    alert('Ops.. too high' + '\n' + 'you can try again');

    inputnum= prompt('Now could you Guess haw many flower I have own! between 1 and 15');
    //alert('Oh.. too high..' + '\n' + 'you can try again, you still have '+ attempt + ' attempts');//

  }

  else alert('you exceeded the allowed number of attempts ');
}
alert('actually I have 7 types');



/*let attempt = 0;
do{let inputnum = prompt('Now could you Guess haw many flower I have own! between 1 and 15');

  if (inputnum === '7')
  {
    alert('WOW.. congrates, you guessed it');
  }

  else if (inputnum <= '6')
  { --attempt;
    alert('Ops.. too low' + '\n' + 'you can try again, you still have '+ attempt+' attempts');
    inputnum= prompt('Now could you Guess haw many flower I have own! between 1 and 15');
  }

  else
  if (inputnum >= '8')
  { --attempt;
    alert('Oh.. too high..' + '\n' + 'you can try again, you still have '+ attempt + ' attempts');
    inputnum= prompt('Now could you Guess haw many flower I have own! between 1 and 15');
  }


}
while(attempt<=4);
*/

//______________________________________________________________________________________________________________________
///*Question 7 lab03 16 mars//
let mydrink=['coffee','pepsi','nescafi'];
for(let turns=6; turns>=1, turns--;)
{
  let answer= prompt('could you guess my faviourite drink?! Coffee , Pepsi, or Nescafi ?! 🥤☕️');

  if (answer.toLowerCase()=== mydrink[2])
  {console.log('your answer is '+ answer+ '\n'+'Yub, you guessed that, Nescafe is my favourite drink');
    alert('your answer is '+ answer+ '\n'+'Yub, you guessed that, Nescafe is my favourite drink');
    score++;
    break;
  }

  else if(answer.toLowerCase()=== mydrink[0] || answer.toLowerCase()=== mydrink[1])
  {alert('your answer is '+ answer+'\n'+ 'which is not correct, try again 🤦‍♀️ ');}

  if ((answer.toLowerCase()!== mydrink[0] || answer.toLowerCase()!== mydrink[1] || answer.toLowerCase()!== mydrink[2] )&& turns<=0)
  {alert('you exceeded the allowed number of attempts ☹️ ');}
}




console.log('Your score is '+ score+ ' out of 7');
alert('Your score is '+ score+ ' out of 7');

console.log('so glad to share me this game Mr/Ms ' + named + 'Thank you♥🤗' );
alert('so glad to share me this game Mr/Ms ' + named + 'Thank you♥🤗' );




