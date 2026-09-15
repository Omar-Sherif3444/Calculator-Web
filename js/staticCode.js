// var input=document.getElementById("display");
// var num1=document.getElementById("one");
// num1.addEventListener("click",()=>{
//     input.value+=1;
// })
// var num2=document.getElementById("two");
// num2.addEventListener("click",()=>{
//     input.value+=2;
// })
// var num3=document.getElementById("three");
// num3.addEventListener("click",()=>{
//     input.value+=3;
// })
// var num4=document.getElementById("four");
// num4.addEventListener("click",()=>{
//     input.value+=4;
// })
// var num5=document.getElementById("five");
// num5.addEventListener("click",()=>{
//     input.value+=5;
// })
// var num6=document.getElementById("six");
// num6.addEventListener("click",()=>{
//     input.value+=6;
// })
// var num7=document.getElementById("seven");
// num7.addEventListener("click",()=>{
//     input.value+=7;
// })
// var num8=document.getElementById("eight");
// num8.addEventListener("click",()=>{
//     input.value+=8;
// })
// var num9=document.getElementById("nine");
// num9.addEventListener("click",()=>{
//     input.value+=9;
// })
// var num0=document.getElementById("zero");
// num0.addEventListener("click",()=>{
//     input.value+=0;
// })
// var plus=document.getElementById("plus");
// plus.addEventListener("click",()=>{
//     input.value+="+";
// })
// var minus=document.getElementById("minus");
// minus.addEventListener("click",()=>{
//     input.value+="-";
// })
// var multiply=document.getElementById("multiply");
// multiply.addEventListener("click",()=>{
//     input.value+="*";
// })
// var division=document.getElementById("division");
// division.addEventListener("click",()=>{
//     input.value+="/";
// })
// var del=document.getElementById("delete");
// del.addEventListener("click",()=>{
//     input.value="";
// })
// var equal=document.getElementById("equals");
// equal.addEventListener("click",()=>{
//     if (input.value == ""){ 
//         alert("You Must Enter Numbers First");
//         return;
//     }
// for(var i=0;i<input.value.length;i++){
//     if(input.value[i]=="+"){
//         x=+input.value.slice(0,i);
//         y=+input.value.slice(i+1,input.value.length);
//         addfun(x,y);
//     }
//     else if(input.value[i]=="-"){
//         x=+input.value.slice(0,i);
//         y=+input.value.slice(i+1,input.value.length);
//         minusfun(x,y);
        
//     }
//     else if(input.value[i]=="*"){
//         x=+input.value.slice(0,i);
//         y=+input.value.slice(i+1,input.value.length);
//         multfun(x,y);
        
//     }
//     else if(input.value[i]=="/"){
//         x=+input.value.slice(0,i);
//         y=+input.value.slice(i+1,input.value.length);
//         divfun(x,y);
        
//     }
// }
// }
// )
// function addfun(x,y){
//     result=x+y;
//     input.value=result ;
// }
// function minusfun(x,y){
//     result=x-y;
//     input.value=result ;
// }
// function multfun(x,y){
//     result=x*y;
//     input.value=result ;
// }
// function divfun(x,y){
//     result=x/y;
//     if(y==0){
//         input.value="Invalid Operation"
//     }else{
//     input.value=result ;
//     }
// }

// console.dir(input);