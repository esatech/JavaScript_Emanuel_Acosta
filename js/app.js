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
var operando1= "";
var operando2= "";
var operacion= "";
var resultado = "";
var maxDigitos= "";
var compruebaIgual= false;

//Eventos
num0.onclick= function (e) {
  if (display.textContent=="0") {
      resultado= ""
    } else {
      comprobarDigitos()
      if (maxDigitos==false) {
        display.textContent = resultado + "0"
        resultado= display.textContent
      }
    }
  num0.style="padding:1%"
  setInterval(resetNum, 400)
}
num1.onclick= function (e) {
  comprobarDigitos()
  if (maxDigitos==false) {
    display.textContent = resultado + "1"
    resultado= display.textContent
  }
  num1.style="padding:1%"
  setInterval(resetNum, 400)
}
num2.onclick= function (e) {
  comprobarDigitos()
  if (maxDigitos==false) {
    display.textContent = resultado + "2"
    resultado= display.textContent
  }
  num2.style="padding:1%"
  setInterval(resetNum, 400)
}
num3.onclick= function (e) {
  comprobarDigitos()
  if (maxDigitos==false) {
    display.textContent = resultado + "3"
    resultado= display.textContent
  }
  num3.style="padding:1%"
  setInterval(resetNum, 400)
}
num4.onclick= function (e) {
  comprobarDigitos()
  if (maxDigitos==false) {
    display.textContent = resultado + "4"
    resultado= display.textContent
  }
  num4.style="padding:1%"
  setInterval(resetNum, 400)
}
num5.onclick= function (e) {
  comprobarDigitos()
  if (maxDigitos==false) {
    display.textContent = resultado + "5"
    resultado= display.textContent
  }
  num5.style="padding:1%"
  setInterval(resetNum, 400)
}
num6.onclick= function (e) {
  comprobarDigitos()
  if (maxDigitos==false) {
    display.textContent = resultado + "6"
    resultado= display.textContent
  }
  num6.style="padding:1%"
  setInterval(resetNum, 400)
}
num7.onclick= function (e) {
  comprobarDigitos()
  if (maxDigitos==false) {
    display.textContent = resultado + "7"
    resultado= display.textContent
  }
  num7.style="padding:1%"
  setInterval(resetNum, 400)
}
num8.onclick= function (e) {
  comprobarDigitos()
  if (maxDigitos==false) {
    display.textContent = resultado + "8"
    resultado= display.textContent
  }
  num8.style="padding:1%"
  setInterval(resetNum, 400)
}
num9.onclick= function (e) {
  comprobarDigitos()
  if (maxDigitos==false) {
    display.textContent = resultado + "9"
    resultado= display.textContent
  }
  num9.style="padding:1%"
  setInterval(resetNum, 400)
}
////////////////////////////////////////////////////
mas.onclick= function (e) {
  operando1= resultado;
  operacion= "+";
  compruebaIgual= true;
  limpiar();
  mas.style="padding:1%";
  setInterval(resetNum, 400);
}
menos.onclick= function (e) {
  operando1= resultado;
  operacion= "-";
  compruebaIgual= true;
  limpiar();
  menos.style="padding:1%";
  setInterval(resetNum, 400);
}
dividido.onclick= function (e) {
  operando1= resultado;
  operacion= "/";
  compruebaIgual= true;
  limpiar();
  dividido.style="padding:1%";
  setInterval(resetNum, 400);
}
por.onclick= function (e) {
  operando1= resultado;
  operacion= "*";
  compruebaIgual= true;
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
  if (compruebaIgual==true) {
    operando2= resultado;
    resolver()
  } else {
    resolver()
  }
  igual.style="padding:1%";
  setInterval(resetNum, 400);
}
sign.onclick= function (e) {
  if (resultado=="0" || resultado=="") {
    display.textContent = "0"
    resultado= ""
  } else {
    resultado= resultado * -1
    display.textContent = resultado.toString().substr(0,9)
    resultado= display.textContent
  }
  sign.style="padding:1%";
  setInterval(resetNum, 400);
}
punto.onclick= function (e) {
  if (resultado=="0" || resultado=="") {
    display.textContent = "0"+"."
    resultado= display.textContent
  } else {
    comprobarPunto()
  }
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

function comprobarDigitos() {
  if (resultado.length>=8) {
    display.textContent = resultado.substr(0,8)
    maxDigitos= true
  }else {
    maxDigitos= false
  }
}

function comprobarPunto() {
  if (resultado.indexOf(".")!=-1) {
    display.textContent = resultado
    resultado= display.textContent
  } else {
    if (resultado.length>=8) {
      display.textContent = resultado
      resultado= display.textContent
    } else {
      display.textContent = resultado.substr(0,7) + "."
      resultado= display.textContent
    }
  }
}

function limpiar() {
  display.textContent="";
  resultado= "";
}

function reset() {
  resultado= "";
  display.textContent="0";
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
  compruebaIgual= false;
  resultado= res;
  operando1= res;
  if (resultado.toString().length>=8) {
    display.textContent= res.toString().substr(0,8);
  } else {
    display.textContent= res;
  }
}

function mostrar_tecla(event) {
var tecla= event.which || event.keyCode;
switch (tecla) {
  case 48:
    num0.onclick()
    break;
  case 49:
    num1.onclick()
    break;
  case 50:
    num2.onclick()
    break;
  case 51:
    num3.onclick()
    break;
  case 52:
    num4.onclick()
    break;
  case 53:
    num5.onclick()
    break;
  case 54:
    num6.onclick()
    break;
  case 55:
    num7.onclick()
    break;
  case 56:
    num8.onclick()
    break;
  case 57:
    num9.onclick()
    break;
  case 13:
    igual.onclick()
    break;
  case 43:
    mas.onclick()
    break;
  case 45:
    menos.onclick()
    break;
  case 42:
    por.onclick()
    break;
  case 45:
    dividido.onclick()
    break;
  case 98:
    on.onclick()
    break;
  case 46:
    punto.onclick()
    break;
  case 115:
    sign.onclick()
    break;
  }
}

document.onkeypress=mostrar_tecla
