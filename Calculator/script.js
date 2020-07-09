let screen=document.getElementById('screen');
 button=document.querySelectorAll('button');
let screenValue='';
var count=0;
for(item of button){
    item.addEventListener('click', (e)=>{
        buttonText=e.target.innerText;
        console.log("Button Text is",buttonText);
        
        if(buttonText=='C'){
            screenValue="";
            screen.value=screenValue;
            count=0;
        }
        else if(buttonText=='X'){
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
            count+=1;

        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
            // screen.value=screenValue;
        }
       
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
            count+=1;
        }
    });
    
}