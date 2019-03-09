function calculadora() {
  // Variables
  var display= document.getElementById("display");
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
  var resultado = "";

  //Eventos
  num0.onclick= function (e) {
    resultado.textContent = resultado.textContent + "0"
    num0.style="padding:1%"
    setInterval(resetNum, 400)
  }
  num1.onclick= function (e) {
    display.textContent = resultado + "1"
    resultado= display.textContent
    num1.style="padding:1%"
    setInterval(resetNum, 400)
  }
  num2.onclick= function (e) {
    display.textContent = resultado + "2"
    resultado= display.textContent
    num2.style="padding:1%"
    setInterval(resetNum, 400)
  }
  num3.onclick= function (e) {
    resultado.textContent = resultado.textContent + "3"
    num3.style="padding:1%"
    setInterval(resetNum, 400)
  }
  num4.onclick= function (e) {
    resultado.textContent = resultado.textContent + "4"
    num4.style="padding:1%"
    setInterval(resetNum, 400)
  }
  num5.onclick= function (e) {
    resultado.textContent = resultado.textContent + "5"
    num5.style="padding:1%"
    setInterval(resetNum, 400)
  }
  num6.onclick= function (e) {
    resultado.textContent = resultado.textContent + "6"
    num6.style="padding:1%"
    setInterval(resetNum, 400)
  }
  num7.onclick= function (e) {
    resultado.textContent = resultado.textContent + "7"
    num7.style="padding:1%"
    setInterval(resetNum, 400)
  }
  num8.onclick= function (e) {
    resultado.textContent = resultado.textContent + "8"
    num8.style="padding:1%"
    setInterval(resetNum, 400)
  }
  num9.onclick= function (e) {
    resultado.textContent = resultado.textContent + "9"
    num9.style="padding:1%"
    setInterval(resetNum, 400)
  }
  ////////////////////////////////////////////////////
  mas.onclick= function (e) {
    operando1= resultado.textContent;
    operacion= "+";
    limpiar();
    mas.style="padding:1%";
    setInterval(resetNum, 400);
  }
  menos.onclick= function (e) {
    operando1= resultado.textContent;
    operacion= "-";
    limpiar();
    menos.style="padding:1%";
    setInterval(resetNum, 400);
  }
  dividido.onclick= function (e) {
    operando1= resultado.textContent;
    operacion= "/";
    limpiar();
    dividido.style="padding:1%";
    setInterval(resetNum, 400);
  }
  por.onclick= function (e) {
    operando1= resultado.textContent;
    operacion= "*";
    limpiar();
    por.style="padding:1%";
    setInterval(resetNum, 400);
  }
  ////////////////////////////////////////////////////
  on.onclick= function (e) {
    reset();
    on.style="padding:1%";
    setInterval(resetNum, 400);
  }
  igual.onclick= function (e) {
    operando2= resultado.textContent;
    resolver();
    igual.style="padding:1%";
    setInterval(resetNum, 400);
  }
  sign.onclick= function (e) {
    resultado.textContent = "-" + resultado.textContent
    sign.style="padding:1%";
    setInterval(resetNum, 400);
  }
  punto.onclick= function (e) {
    resultado.textContent = resultado.textContent + "."
    punto.style="padding:1%";
    setInterval(resetNum, 400);
  }

  //Funciones
  function resetNum() {
    num0.style="padding:0"
    num1.style="padding:0"
    num2.style="padding:0"
    num3.style="padding:0"
    num4.style="padding:0"
    num5.style="padding:0"
    num6.style="padding:0"
    num7.style="padding:0"
    num8.style="padding:0"
    num9.style="padding:0"
    mas.style="padding:0"
    menos.style="padding:0"
    dividido.style="padding:0"
    por.style="padding:0"
    on.style="padding:0"
    igual.style="padding:0"
    sign.style="padding:0"
    punto.style="padding:0"
  }

  function limpiar() {
    resultado.textContent= "";
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
