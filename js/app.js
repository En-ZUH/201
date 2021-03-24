/* eslint-disable no-inner-declarations */
'use strict';

let score= 0;

let named = prompt('Please enter your name');
alert('Welcome 🤩 Mr/Ms ' +named.toUpperCase()+'\n'+' Lets starting the guessing game! by answering the following questions with yes/no or y/n');

let type = prompt('Ready?!! 👏 ');
if (type.toLocaleLowerCase() === 'yes' || type.toLocaleLowerCase() === 'y')
{

  // eslint-disable-next-line no-inner-declarations
  function getAge(){

    let gender= prompt('Iam a 70 years old 👵 !');
    if (gender.toLocaleLowerCase() === 'no' || gender.toLocaleLowerCase() === 'n')
    {

      alert('your answer is '+ gender+ '\n'+ 'correct 😃 , Iam 27 years old ');
      score++;
    }

    else if (gender.toLocaleLowerCase() === 'yes' || gender.toLocaleLowerCase() === 'y')
    {

      alert('your answer is '+ gender+ '\n'+ 'thats not correct, Iam not 70 ');
      score++;
      console.log(score);
    }
  }

  getAge();



  function career(){

    let career= prompt('Iam a prof. programmer');
    if (career.toLocaleLowerCase() === 'yes' || career.toLocaleLowerCase() === 'y')
    {

      alert('your answer is '+ career+ '\n'+ 'incorrect.. unfortunutly No! Iam still a beginner and try to be that');
    }



    else if (career.toLocaleLowerCase() === 'no' || career.toLocaleLowerCase() === 'n')
    {

      alert('your answer is '+ career+ '\n'+ 'correct.. you guessed that, Iam still a student ');

      score++; }
  }
  career();


  function shopping(){
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
  }
  shopping();



  function color(){
    let colory= prompt('My favourite color is black');
    if (colory.toLocaleLowerCase() === 'yes' || colory.toLocaleLowerCase() === 'y')
    {

      alert('your answer is '+ colory+ '\n'+ 'not correct.. No, it is the pink');
    }


    else if (colory.toLocaleLowerCase() === 'no' || colory.toLocaleLowerCase() === 'n')

    {

      alert('your answer is '+ colory+ '\n'+ 'correct.. yeah, it is not my favourite one');

      score++; }
  }
  color();



  function sweet() {
    let sweets= prompt('the sweets is my lovely snack🍰🍰🍰');

    if (sweets.toLocaleLowerCase() === 'yes' || sweets.toLocaleLowerCase() === 'y')

    { alert('your answer is '+ sweets+ '\n'+ 'correct.. yeah, I really love it');

      score++;
    }

    else if (sweets.toLocaleLowerCase() === 'no' || sweets.toLocaleLowerCase() === 'n')
      alert('your answer is '+ sweets+ '\n'+ 'not correct.. you didnt guess that, actually I Love it');

  }

  sweet();




  function guess(){
    let inputnum= prompt('Now could you Guess haw many flower 🌷 I have own! between 1 and 15, you wil have 4 attempts');
    for (let attempt = 4; attempt > 1; attempt--)
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

      }

      else
      if (inputnum >= 8)
      {
        alert('Ops.. too high' + '\n' + 'you can try again');

        inputnum= prompt('Now could you Guess haw many flower I have own! between 1 and 15');


      }

      else alert('you exceeded the allowed number of attempts ');
    }
    alert('actually I have 7 types');
  }

  guess();





  function favDrink(){
    let mydrink=['coffee','pepsi','nescafi'];
    for(let turns=6; turns>=1, turns--;)
    {
      let answer= prompt('could you guess my faviourite drink?! Coffee , Pepsi, or Nescafi ?! 🥤☕️');

      if (answer.toLowerCase()=== mydrink[2])
      {
        alert('your answer is '+ answer+ '\n'+'Yub, you guessed that, Nescafe is my favourite drink');
        score++;
        break;
      }

      else if(answer.toLowerCase()=== mydrink[0] || answer.toLowerCase()=== mydrink[1])
      {alert('your answer is '+ answer+'\n'+ 'which is not correct, try again 🤦‍♀️ ');}

      if ((answer.toLowerCase()!== mydrink[0] || answer.toLowerCase()!== mydrink[1] || answer.toLowerCase()!== mydrink[2] )&& turns<=0)
      {alert('you exceeded the allowed number of attempts ☹️ ');}
    }
  }

  favDrink();







  alert('Your score is '+ score+ ' out of 7');

  alert('so glad to share me this game Mr/Ms ' + named + 'Thank you♥🤗' );
}

else alert(' you can try later');
//break;
