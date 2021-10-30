

let i = 0
let borraDisplay = false;
let display = document.getElementById("display")
var n1=""
var n2=""
    
    
    var signo="";
    var bannerNumber=false;
    var caracter ="";
setListener()



//test


function basicOp(n, n1, operator) {
    if (operator === "+") { return parseInt(n) + parseInt(n1) }
    else if (operator === "-") { return n - n1 }
    else if (operator === "*") { return n * n1 }
    else if (operator === "/") { return Math.round((n / n1)*10000)/10000; }
}


function test(e) {
    
     caracter = e.originalTarget.textContent;
    
   
    
    if (borraDisplay) { display.textContent = ""; borraDisplay = false }
    if (e.originalTarget.textContent === "clear") { display.innerHTML = ""; bannerNumber=false;n1="";n2="";signo="";return; }
    else if (e.originalTarget.textContent === "undo") { display.textContent = display.textContent.slice(0, -1); return }
    else if (display.innerHTML.length > 15) { return }
    else if(caracter==="."){
        if(!bannerNumber){n1=n1+caracter;display.textContent=display.textContent+"."}
        else{n2=n2+caracter;display.textContent=display.textContent+"."}
        return
    }
    else if (caracter==="=") {n1 = basicOp(n1, n2, signo);
        display.textContent = n1;
        n2 = "";
        
        signo = "";
        bannerNumber=false
        
         return }

    if (!isNaN(caracter)) {
        display.textContent = display.textContent + caracter
        if (!bannerNumber) { n1 = n1 + caracter }
        else { n2 = n2 + caracter }
    }
    else if (e.originalTarget.classList.contains("operador")) {
        if (!bannerNumber) {
            signo = caracter;
            bannerNumber = true;
            display.textContent = display.textContent + caracter
        }
        else {
            n1 = basicOp(n1, n2, signo);
            n2 = "";
            signo = caracter;
           
            display.textContent = n1+caracter;
        }



    }






    console.log(e)
}
function resolve() {

    let n1 = ""
    let n2 = ""
    let nSelector = false
    let caracter

    let Operator
    let expresion = ""
    console.log("2 " + isNaN("2"))
    console.log("/" + isNaN("/"))
    console.log("* " + isNaN("*"))
    console.log("1" + isNaN("1"))

    for (let i = 0; i < display.textContent.length; i++) {
        caracter = display.textContent.charAt(i);
        if (!nSelector) {
            if (!isNaN(caracter)) { n1 = n1.concat(caracter) }
            else { Operator = caracter; nSelector = true }
        } else {
            if (!isNaN(caracter)) { n2 = n2.concat(caracter) }

            else { n1 = basicOp(n1, n2, operator); n2 = ""; display.textContent = n1 }

        }


    }

    display.textContent = n1
    console.log("resultado")

    borraDisplay = true
}
function setListener() {
    document.querySelectorAll(".tecla").forEach(e => e.addEventListener("click", test));
    display.innerHTML = ""
}
function isNumber(val) {
    val = val * 2
    if (val === NaN) { return false }
    else { return true }




}