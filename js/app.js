function calculadora() {
  // Variables
  var resultado= document.getElementById("display");
  var on= document.getElementById("on");
  var sign= document.getElementById("sign");
  var punto= document.getElementById("punto");
  var igual= document.getElementById("igual");
  var dividido= document.getElementById("dividido");
  var por= document.getElementById("por");
  var menos= document.getElementById("menos");
  var mas= document.getElementById("mas");
  var num0= document.getElementById("0");
  var num1= document.getElementById("1");
  var num2= document.getElementById("2");
  var num3= document.getElementById("3");
  var num4= document.getElementById("4");
  var num5= document.getElementById("5");
  var num6= document.getElementById("6");
  var num7= document.getElementById("7");
  var num8= document.getElementById("8");
  var num9= document.getElementById("9");
  var operando1;
  var operando2;
  var operacion;

  //Eventos
  num0.onclick= function (e) {
    if (resultado.textContent="0") {
      resultado.textContent= "0"
    }else {
      resultado.textContent = resultado.textContent + "0"
    }
  }
  num1.onclick= function (e) {
    if (resultado.textContent="0") {
      resultado.textContent= "1"
    }else {
      resultado.textContent = resultado.textContent + "1"
    }
  }
  num2.onclick= function (e) {
    resultado.textContent = resultado.textContent + "2"
  }
  num3.onclick= function (e) {
    resultado.textContent = resultado.textContent + "3"
  }
  num4.onclick= function (e) {
    resultado.textContent = resultado.textContent + "4"
  }
  num5.onclick= function (e) {
    resultado.textContent = resultado.textContent + "5"
  }
  num6.onclick= function (e) {
    resultado.textContent = resultado.textContent + "6"
  }
  num7.onclick= function (e) {
    resultado.textContent = resultado.textContent + "7"
  }
  num8.onclick= function (e) {
    resultado.textContent = resultado.textContent + "8"
  }
  num9.onclick= function (e) {
    resultado.textContent = resultado.textContent + "9"
  }
  ////////////////////////////////////////////////////
  mas.onclick= function (e) {
    operando1= resultado.textContent;
    operacion= "+";
    limpiar();
  }
  menos.onclick= function (e) {
    operando1= resultado.textContent;
    operacion= "-";
    limpiar();
  }
  dividido.onclick= function (e) {
    operando1= resultado.textContent;
    operacion= "/";
    limpiar();
  }
  por.onclick= function (e) {
    operando1= resultado.textContent;
    operacion= "*";
    limpiar();
  }
  ////////////////////////////////////////////////////
  on.onclick= function (e) {
    reset();
  }
  igual.onclick= function (e) {
    operando2= resultado.textContent;
    resolver();
  }
  sign.onclick= function (e) {
    resultado.textContent = "-" + resultado.textContent
  }
  punto.onclick= function (e) {
    if (resultado.textContent=".") {

    }
    resultado.textContent = resultado.textContent + "."
  }

  //Funciones
  function limpiar() {
    resultado.textContent= "0";
  }
  function reset() {
    resultado.textContent= "0";
    operando1= 0;
    operando2= 0;
    operacion= "";
  }
  function resolver() {
    var res= 0;
    switch (operacion) {
      case "+":
        res= parseFloat(operando1) + parseFloat(operando2);
        break;
      case "-":
        res= parseFloat(operando1) - parseFloat(operando2);
        break;
      case "*":
        res= parseFloat(operando1) * parseFloat(operando2);
        break;
      case "/":
        res= parseFloat(operando1) / parseFloat(operando2);
        break;
    }
    reset()
    resultado.textContent= res;
  }
}

calculadora()














/*
//Asigna valores a los elementos
document.getElementById("display").value= "";
document.getElementById("0").value= 0;
document.getElementById("1").value= 1;
document.getElementById("2").value= 2;
document.getElementById("3").value= 3;
document.getElementById("4").value= 4;
document.getElementById("5").value= 5;
document.getElementById("6").value= 6;
document.getElementById("7").value= 7;
document.getElementById("8").value= 8;
document.getElementById("9").value= 9;


// Funcion que se ejecuta en el elemento
function mostrarAlerta(mensaje) {
  display.innerHTML= num7.value;
}

// Asignacion del evento al boton
num7.addEventListener("click", mostrarAlerta)
num1.addEventListener("click", mostrarAlerta)
num2.addEventListener("click", mostrarAlerta)
num3.addEventListener("click", mostrarAlerta)
num4.addEventListener("click", mostrarAlerta)
num5.addEventListener("click", mostrarAlerta)
*/
