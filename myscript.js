

let i = 0
let borraDisplay = false;
var pantalla = document.getElementById("display")
var lastCaracter = "";
var signo = "";
var secondNumber = false;
var DislplayClear = true;
setListener()
console.log(display)




//test


function basicOp(n, n1, operator) {
    var r;
    if (operator === "+") { r = parseFloat(n) + parseFloat(n1) }
    else if (operator === "-") { r = n - n1 }
    else if (operator === "*") { r = n * n1 }
    else if (operator === "/") { r = Math.round((n / n1) * 10000) / 10000; }
    r = Math.round((r) * 10000) / 10000;
    return r
}



function prueba() {

}

function resuelveDisplay() {
    var cambiaaN2;
    var n1 = ""
    var n2 = ""
    test = false
    for (i = 0; i < pantalla.textContent.length; i++) {
        var caracter = pantalla.textContent.charAt(i)
        if (caracter * 2) {
            console.log(caracter + "= true")
        }
        else { console.log(caracter + "= false") }
    }


    for (i = 0; i < pantalla.textContent.length; i++) {
        var caracter = pantalla.textContent.charAt(i)
        if (caracter * 2 || caracter === ".") {
            if (!cambiaaN2) {
                n1 = n1.concat(caracter)
            }
            else { n2 = n2.concat(caracter) }

        }
        else {
            var c = lastCaracter * 2;
            if (isNaN(c) && caracter === "-") {
                if (cambiaaN2) {
                    n2 = n2 + caracter
                }
                else { n1 = n1 + caracter }
            }
            else {
                signo = caracter; cambiaaN2 = true
            }
        }
        lastCaracter = caracter
    }
    pantalla.textContent = basicOp(n1, n2, signo)


}



function fillDisplay(e) {
    if(lastCaracter==="="){pantalla.textContent=""}
    var caracter = e.target.textContent;
    if (caracter === "±") { pantalla.textContent = pantalla.textContent + "-"; return }

    if (e.target.textContent === "clear") {
        pantalla.textContent = "";
        secondNumber = false
        return
    }
    if (e.target.classList.contains("operador") && secondNumber && caracter !== "-") { resuelveDisplay(e) }
    else if (e.target.classList.contains("operador") && !secondNumber) { secondNumber = true }
    if (caracter === "=") { resuelveDisplay(e); secondNumber = false; return }

    pantalla.textContent = pantalla.textContent + caracter
    lastCaracter = caracter;





}



function setListener() {
    //    document.querySelectorAll(".tecla").forEach(e => e.addEventListener("click", fillDisplay(e)));
    document.querySelectorAll(".tecla").forEach(e => e.addEventListener("click", fillDisplay));
    display = ""
}
function isNumber(val) {
    val = val * 2
    if (val === NaN) { return false }
    else { return true }




}