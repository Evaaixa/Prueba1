function calculate(){
    console.log("calculando")
    let num1 = Number.getElementById("num1").value;
    let num2 = Number.getElementById("num2").value;
    let operador = document.getElementById("operador").value;
    let resultadoTxt;
    let esCorrecto = true;

    if(operador == '+'){
        resultadoTxt = num1 + num2;
    }
    if(operador == '-'){
        resultadoTxt = num1 - num2;
    }
    if(operador == '*'){
        resultadoTxt = num1 * num2;
    }
    if((num2 == 0) && (operador == '/')){
        alert("No se puede dividir por cero");
        esCorrecto = false
    }else{
        resultadoTxt = num1 / num2;
    }

    if(esCorrecto){
        document.getElementById("resultado").textContent = 'El resultado es ${num1} ${operador} ${num2} = ${resultadoTxt}';
    }
    document.getElementById("resultado").textContent = 'El resultado de ${num1} ${operador} ${num2} = ${resultadoTxt}';

    //Esta es otra manera de realizar la calculadora
        switch(operador){
            case '+':
                resultadoTxt = num1 + num2;
                break;
            case '-':
                resultadoTxt = num1 - num2;
                break;
            case '*':
                resultadoTxt = num1 * num2;
                break;
            case '/':
                if(num2 == 0){
                    document.getElementById("resultado").innerHTML = "No se puede dividir por cero";
                    return;
                }
                resultadoTxt = num1 / num2
                break;
        }
}

function limpiar(){
    console.log("limpiando..")
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("operator").value = '+';
    document.getElementById("resultado").textContent = "";
}



