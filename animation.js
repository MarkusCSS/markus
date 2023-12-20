const textToPrint =[`Thinking <br> in pictures`,`as the Most <br> Creative`,`Mindset of <br> open Gates of `,`of the Universe <br> Planet Earth`,`WELCOME &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br> WELCOME!`];
const dimenzije = document.querySelector('.container');
const animacija = document.getElementById('main1');
const blic = document.getElementById('blic');
const dugmad = document.querySelector('.btns');
//const gallery1 = document.getElementById('gallery1');


function resetAllDom(){
    dugmad.style.display = 'none';
    dimenzije.style.display = 'none';
    animacija.style.display = 'none';
    document.getElementById('gallery1').style.display = 'none';
    document.getElementById('gallery2').style.display = 'none';
    document.getElementById('gallery3').style.display = 'none';
    document.getElementById('gallery4').style.display = 'none';
    document.getElementById('gallery5-5').style.display = 'none';
    document.getElementById('gallery6').style.display = 'none';
}

function changeDivs() {
    
    dugmad.style.display = 'none';
    dimenzije.style.display = 'none';
    animacija.style.display = 'block';
    
    

    // Sačekajte malo vremena pre nego što pustite zvuk
    setTimeout(() => {
        soundLoad();
        blic.style.width=2000 +'px';
        blic.style.top=-50 +'%';
        blic.style.left=-50 +'%';
        document.querySelector('.animation-frame').style.backgroundImage = 'url("./assets/blizBtw.png")';
       
    }, 600);
    setTimeout(()=>{  
    blic.style.width=2000 +'px'; // Izmena za proveru vrenost 0
    blic.style.top=50 +'%';
    blic.style.left=50 +'%';
   
    blic.style.background='lightblue';
},650);



setTimeout(()=>{
  
    
        blic.style.background ='lightblue';
   
    
    document.getElementById('aboutMe').style.display='block';
    document.getElementById('output').style.display='block';
    printShow(textToPrint[0]);

    setTimeout(()=>{
        printShow(textToPrint[1]);
        setTimeout(()=>{
            printShow(textToPrint[2]);
            setTimeout(()=>{
                printShow(textToPrint[3]);
                setTimeout(()=>{
                    printShow(textToPrint[4]);
                },6000);
            },4800);
        },3600);
    },2800);
},1100);
}



 
const flash = document.getElementById('myAudio');
console.log(flash);
function soundLoad() {
    flash.play();
    
}


function printWordByWord(text) {
    document.getElementById('output').innerHTML=``;
    if (text.length === 0) {
        return null;
    }
    if (!text.includes(' ')) {
        document.getElementById('output').innerHTML += text;
        return null;
    }
    let words = text.split(/ /);
    let firstWord = words.shift();
    document.getElementById('output').innerHTML += firstWord + ' ';
    return words.join(' ');
}

function printShow(text) {
    let restOfText = printWordByWord(text);
    if (restOfText) {
        setTimeout(() => printShow(restOfText), 500);
    }
}





document.getElementById('nextBtn').addEventListener('click',()=>{
    // neki kod koji treba izvrsiti,funkcija koja ce se pozivati i na drugim mestima
      resetToRotate();
    });
    
    function resetToRotate(){
        dimenzije.style.display = 'none';
        dugmad.style.display = 'none';
        animacija.style.display = 'block';
        blic.style.display = 'block';
document.querySelector('.animation-frame').style.backgroundImage = 'none';
document.querySelector('.animation-frame').style.backgroundColor = 'transparent';
document.getElementById('aboutDebugText').style.display='block';
document.getElementById('nextBtn').innerHTML='Back';
document.getElementById('nextBtn').addEventListener('click',()=>{
   console.log(2);
   dimenzije.style.display = 'block';
   dugmad.style.display = 'flex';
   animacija.style.display = 'none';
   blic.style.display = 'none';
});
        
       

    }
    var oneTime = 1;
function oneTimeAnimation(){
    document.body.style.overflowY='hidden';
    if(oneTime === 1) {
        changeDivs();
        oneTime++;
    } else if(oneTime ===2){
        console.log(3);
        dimenzije.style.display = 'none';
        dugmad.style.display = 'none';
        animacija.style.display = 'block';
        blic.style.display = 'block';
    } 

}





