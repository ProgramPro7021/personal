
const counter = document.getElementById("counter");
let count = 0;

setInterval(() => {
  count++;
  counter.innerText = count;
}, 1800);

const countrer1 =   document.getElementById("counter3");
let count1 = 0;

setInterval(()=>{
    count1++;
    countrer1.innerText = count1;
},1900);



const countrer4 = document.getElementById("counter4");
let count3= count;

setInterval(()=>{
    count3++;
    countrer4.innerText = count3;
}, 2000)

const newcounter = document.getElementById("counter2");
let countsnew = 0 ;

setInterval(()=>{
    countsnew++;
    newcounter.innerText = countsnew;
}, 2500)

