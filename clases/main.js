//pagos en cuotas sobre un monto determinado de 3 deudas
for (let turno = 1; turno <= 3; turno++){

let deuda = parseInt(prompt(`Ingrese el monto total de su deuda ${turno}`));
let cuotas = parseInt(prompt("Ingrese la cantidad total de cuotas a pactar entre 2 y 36"));
if (cuotas <= 36 && cuotas >= 2){
function pagos(deuda,cuotas){
        return deuda / cuotas;
    }

    }
else{

        alert("Error el numero de cuotas debe estar entre 2 y 36");
        };

    
let resultado = pagos(deuda,cuotas);



alert (`El monto a pagar en cada cuota de la deuda ${turno} es de  ${resultado}`);

}




