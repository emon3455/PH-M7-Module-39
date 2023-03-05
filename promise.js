

// promise.. resolve/rejected

const getData = new Promise((resolve,reject)=>{
    const num = Math.random()*10;
    console.log(num);

    if(num<5){
        resolve(num);
    }
    else{
        reject("Not Less then 5");
    }
})

getData
.then(data=> console.log(data+100) )
.catch((ex)=> console.log("ERR: ",ex));