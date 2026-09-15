var input=document.getElementById("display");
var btns=document.querySelectorAll(".button1 , .button2");
btns.forEach((button) => {
    button.addEventListener("click",()=>{
        var value=button.innerHTML;
        console.dir(button)
        if(value==="del"){
            input.value="";
        }
        else if(value==="="){
            for(var i=0;i<input.value.length;i++){
    if(input.value[i]=="+"){
        x=+input.value.slice(0,i);
        y=+input.value.slice(i+1,input.value.length);
        addfun(x,y);
        break;
    }
    else if(input.value[i]=="-"){
        x=+input.value.slice(0,i);
        y=+input.value.slice(i+1,input.value.length);
        minusfun(x,y);
        break;
    }
    else if(input.value[i]=="*"){
        x=+input.value.slice(0,i);
        y=+input.value.slice(i+1,input.value.length);
        multfun(x,y);
        break;
    }
    else if(input.value[i]=="/"){
        x=+input.value.slice(0,i);
        y=+input.value.slice(i+1,input.value.length);
        divfun(x,y);
        break;
    }
    }
    }else{
        input.value+=value;
    }
    })
});
function addfun(x,y){
    result=x+y;
    input.value=result ;
}
function minusfun(x,y){
    result=x-y;
    input.value=result ;
}
function multfun(x,y){
    result=x*y;
    input.value=result ;
}
function divfun(x,y){
    result=x/y;
    if(y==0){
        input.value="Invalid Operation"
    }else{
    input.value=result ;
    }
}
