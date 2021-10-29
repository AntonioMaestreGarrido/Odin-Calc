

let i = 0
let borraDisplay = false;
let display = document.getElementById("display")
setListener()



//test


function basicOp(n, n1, operator) {
    if (operator === "+") { return parseInt(n) + parseInt(n1) }
    else if (operator === "-") { return n - n1 }
    else if (operator === "*") { return n * n1 }
    else if (operator === "/") { return n / n1 }
}
console.log(basicOp(2, 3, "+"))
console.log(basicOp(2, 3, "-"))
console.log(basicOp(2, 3, "*"))
console.log(basicOp(2, 3, "/"))

function test(e) {
    if (borraDisplay) { display.textContent = ""; borraDisplay = false }

    if (e.originalTarget.textContent === "clear") { display.innerHTML = ""; return; }
    else if (e.originalTarget.textContent === "undo") { display.textContent = display.textContent.slice(0, -1); return }
    else if (display.innerHTML.length > 15) { return }
    else if (e.originalTarget.textContent === "=") { resolve(); return }

    display.innerHTML = display.innerHTML + e.originalTarget.textContent;
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
        caracter=display.textContent.charAt(i);
        if (!nSelector) {
            if (!isNaN(caracter)) { n1 = n1.concat(caracter) }
            else { Operator=caracter ;nSelector=true}
        } else {
            if (!isNaN(caracter)) { n2 = n2.concat(caracter) }

            else { n1=basicOp(n1,n2,operator);n2="" ;display.textContent=n1}

        }


    }
    
    display.textContent=n1
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