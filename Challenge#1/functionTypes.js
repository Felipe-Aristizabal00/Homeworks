/*Diferencia entre Arrow Functions y Regular Functions

La razón por la que las arrow functions son diferentes a las funciones regulares es porque no tienen un this propio. En su lugar, heredan el this del contexto que les rodea. Cuando están dentro del objeto persona, this hace referencia al objeto window.

*/

//Regular Function

function oddOrEvenRegular (num) {
    if (num % 2 === 0){
        console.log("El número " + num + " es par.")
    }else{
        console.log("El número " + num + " es impar.")
    }
}

//Arrow Function

const oddOrEvenArrow = (num) => {
    if (num % 2 === 0){
        console.log("El número " + num + " es par.")
    }else{
        console.log("El número " + num + " es impar.")
    }
}

oddOrEvenRegular(2);
oddOrEvenRegular(7);
oddOrEvenArrow(5);
oddOrEvenArrow(10);