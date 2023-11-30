let random1= Math.floor(Math.random()*6)+1
    
let loc = './images/dice'+random1 +'.png';
document.querySelector('.img1').setAttribute('src',loc);

let random2=Math.floor(Math.random()*6)+1;
let loc2= './images/dice'+random2 +'.png';
document.querySelector('.img2').setAttribute('src',loc2);

let content="Draw!";
if(random1>random2){
content="Player 1 Wins";
}
else if(random2>random1){
    content="Player 2 Wins";
}

document.querySelector('h1').textContent=content;