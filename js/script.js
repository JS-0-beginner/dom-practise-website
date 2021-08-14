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

//Using - onclick="changeSubscribe()" in submit button 

    const footerBG = document.getElementById('footer');

 function changeSubscribe()
 {
     footerBG.style.backgroundColor='tomato';
 }

//Task(6)

const buttons = document.getElementsByClassName('buy-buttons');
     for(const button of buttons)
     {
         
         button.addEventListener('click',
            
         function(event)
         {
        
            event.target.parentNode.removeChild(event.target);
         }
         
         );
        
     }

//Task(7)

document.getElementById('email-word').addEventListener('keyup',

function(event)
{
    const submitButton = document.getElementById('submit-btn')

    if(event.target.value == 'email')
    {
        submitButton.removeAttribute('disabled');
    }
    else
    {
        submitButton.setAttribute('disabled', true);
    }
}

)

//Task(8)

///////////////// watches \\\\\\\\\\\\\\\\\\\

document.getElementById('watch-img').addEventListener('mouseenter',

function()
{
    document.getElementById('watch-img').src='images/buy.jpg';
}

);
document.getElementById('watch-img').addEventListener('mouseout',

function()
{
    document.getElementById('watch-img').src='images/categories/watch.png';
}

);

///////////////// shoes \\\\\\\\\\\\\\\\\\\
document.getElementById('shoe-img').addEventListener('mouseenter',

function()
{
    document.getElementById('shoe-img').src='images/buy.jpg';
}

);
document.getElementById('shoe-img').addEventListener('mouseout',

function()
{
    document.getElementById('shoe-img').src='images/categories/shoes.png';
}

);

///////////////// bags \\\\\\\\\\\\\\\\\\\

document.getElementById('bag-img').addEventListener('mouseenter',

function()
{
    document.getElementById('bag-img').src='images/buy.jpg';
}

);
document.getElementById('bag-img').addEventListener('mouseout',

function()
{
    document.getElementById('bag-img').src='images/categories/bag.png';
}

);

//Task(9)
//Using addEventListener

 document.getElementById('footer').addEventListener('dblclick',
 
 function()
 {
    footer.style.backgroundColor='#4682B4';
 }
 
 );

