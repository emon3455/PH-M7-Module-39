document.getElementById("check-btn").addEventListener("click",()=>{
    const age = document.getElementById("inputField").value;
    
    
    try{

        if(isNaN(age)){
            throw "please Enter a Number";
        }
        else if(age>33){
            throw "Your age is over 33";
        }
        else if(age<18){
            throw "your age is below 18";
        }
        else{
           console.log("you can go inside");
        }

        document.getElementById("error").innerText="";

    }
    catch(ex){
        document.getElementById("error").innerText="Error: "+ex;
    }
    finally{

    }

})