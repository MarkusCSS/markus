let box = document.querySelector('.box');
let degLoad = 45; // Prilagodite po potrebi početni ugao rotacije
let degrees = 0;


window.addEventListener('load', () => {
    let galleries = document.querySelectorAll('.box span');
    let titles = ['About Me', 'Gallery1', 'Gallery2', 'Gallery3', 'Gallery4', 'Gallery5', 'Gallery6', 'WELCOME'];

    for (let i = 0; i < galleries.length; i++) {
        let title = document.createElement('p');
        title.innerHTML = titles[i];
        galleries[i].appendChild(title);
    }

    // Select the .box element
    let box = document.querySelector('.box');

    // Inicijalna rotacija na 0 stepeni
    box.style.transition = 'transform 2s';
    box.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;

    // Additional code to rotate the entire gallery 360 degrees after a delay
    setTimeout(() => {
        degrees -= 360;
        box.style.transition = 'transform 2s';
        box.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;
    }, 100);
});


let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
var degreesCounterForAnimation = -205;
prev.addEventListener('click', () => {
    degrees += 45;
    box.style.transition = 'transform 1s';
    box.style.transform = `perspective(1000px) rotateY(${degrees}deg)`; //rotateX(${360}deg), dodaj za rotaciju
    console.log(degrees);
    if(degrees > degreesCounterForAnimation){
        box.style.transform = `perspective(1000px) rotateY(${degrees}deg) rotateX(${360}deg)`;
        degreesCounterForAnimation =degrees + 225;
    } 
});

next.addEventListener('click', () => {
    degrees -= 45;
    box.style.transition = 'transform 1s';
    box.style.transform = `perspective(1000px) rotateY(${degrees}deg)`;
    console.log(degrees);
    
});



document.getElementById('welcome').addEventListener('click',()=>{
    console.log(degrees);
    // Check if degrees is a multiple of 360
    if (degrees % 360 !== 0) {
        return; // Exit the function if not a multiple of 360
    }
   
    box.style.transition = 'transform 1.5s';
    box.style.transform = `perspective(1000px) rotateY(${degrees+25}deg) `;
    document.querySelector('.backBtnFromMainPage').style.display='block';
    box.style.background='blue';
    prev.style.display='none';
    next.style.display='none';
    setTimeout(()=>{
        box.style.transform=`perspective(500px) rotateY(${degrees+25}deg) `;
       // box.style.width=500 +'px';
    },1500);
    setTimeout(()=>{
        box.style.transform=`perspective(500px) rotateY(${degrees}deg) `;
       // box.style.width=500 +'px';
    },2200);
    setTimeout(()=>{
       // box.style.transform=`perspective(500px) rotateY(${-335}deg) `;
        box.style.width=500 +'px';
    },2400);
    
});
document.querySelector('.backBtnFromMainPage').addEventListener('click',()=>{
    setTimeout(()=>{
        // box.style.transform=`perspective(500px) rotateY(${-335}deg) `;
         box.style.width=200 +'px';
     },300); 
     setTimeout(()=>{
        box.style.transform=`perspective(500px) rotateY(${degrees+25}deg) `;
       // box.style.width=500 +'px';
    },400);
    setTimeout(()=>{
        box.style.transform=`perspective(1000px) rotateY(${degrees+25}deg) `;
       // box.style.width=500 +'px';
    },800);
    setTimeout(()=>{
        box.style.transform=`perspective(1000px) rotateY(${degrees}deg) `;
       // box.style.width=500 +'px';
    },1000);
    setTimeout(()=>{
        prev.style.display='flex';
    next.style.display='flex';
    document.querySelector('.backBtnFromMainPage').style.display='none';
    box.style.background='transparent';
    },1200);
});

