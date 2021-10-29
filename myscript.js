

let i =0
let display=document.getElementById("display")
setListener()






function basicOp(n,n1,operator){
    if (operator==="+"){return n+n1}
    else if (operator==="-"){return n-n1}
    else if (operator==="*"){return n*n1}
    else if (operator==="/"){return n/n1}
}
console.log(basicOp(2,3,"+"))
console.log(basicOp(2,3,"-"))
console.log(basicOp(2,3,"*"))
console.log(basicOp(2,3,"/"))

function test(e){
    if(e.originalTarget.textContent==="clear"){display.innerHTML="";return;}
    if(display.innerHTML.length>15){return}
    
    display.innerHTML=display.innerHTML+e.originalTarget.textContent;
    console.log(e)
}
function setListener(){
    document.querySelectorAll(".tecla").forEach(e => e.addEventListener("click", test));
    display.innerHTML=""
}