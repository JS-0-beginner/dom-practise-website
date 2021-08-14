//Task(2)
const h1headings = document.getElementsByTagName('h1');
    // console.log(h2LightBlue);
    for(const head of h1headings)
    {
        head.style.color='lightblue';
    }

//Task(3)
const backpackBG = document.getElementById('backpack');

    backpackBG.style.backgroundColor = 'tomato';
    backpackBG.style.borderRadius = '35px';

//Task(4)
const cards = document.getElementsByClassName('card');

    for(const singleCard of cards)
    {
        singleCard.style.borderRadius = '30px';
    }

//Task(5)
//Using - Onclick

    const footerBG = document.getElementById('footer');

 function changeSubscribe()
 {
     footerBG.style.backgroundColor='tomato';
 }

 //Task(9)

 document.getElementById('footer').addEventListener('dblclick',
 
 function()
 {
    footerBG.style.backgroundColor='#4682B4';
 }
 
 );

