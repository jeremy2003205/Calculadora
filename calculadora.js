function calculadora(num1, num2, operacion) {
      if (operacion === "+") {
        return num1 + num2;
      } else if (operacion === "-") {
        return num1 - num2;
      } else if (operacion === "*") {
        return num1 * num2;
      } else if (operacion === "/") {
        if (num2 === 0) {
          return "ERROR: no se puede dividir entre 0";
        } else {
          return num1 / num2;
        }
      } else {
        return "Operación inválida";
      }
    }

    let seguir = true;

    while (seguir) {
      let operacion = prompt("Ingresa la operación (+, -, *, /):");
      
      if (operacion === null || operacion.toLowerCase() === "salir") {
        seguir = false;
        alert("Gracias por usar la calculadora.");
        break;
      }
      let num1 = parseFloat(prompt("Ingresa el primer número:"));
      let num2 = parseFloat(prompt("Ingresa el segundo número:"));

      let resultado = calculadora(num1, num2, operacion);
      alert("El resultado es: " + resultado);
      alert("desea realizar otra operación? sino escriba 'salir'");
      console.log("El resultado es: " + resultado);
    }