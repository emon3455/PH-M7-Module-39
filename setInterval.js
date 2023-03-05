console.log(1);
console.log(2);
let num=0;
const IntervalId=setInterval(()=>{
   
    console.log(num);
    if(num===10){
        clearInterval(IntervalId);
        
    }
    ++num;
    
},1000)

console.log(3);
console.log(4);