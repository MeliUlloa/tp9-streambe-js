// function triplicador(x){
//     return x*3
// }

// let resultado= triplicador(3)
// console.log(resultado)




// function multiplicador(x, y){
//     return x * y
// }

// let resultado = multiplicador(2, 4)
// console.log(resultado)




// function division (x,y){
//     return x/y
// }
//  let resultado = division(4,2)
//  console.log(resultado)



// function resto (x,y){
//     return x%y
// }

// let resultado = resto(56,8)
// console.log(resultado)




// function trescalculos (x){
//     return x*3
// }

// let resultado = trescalculos(5)
// console.log(resultado);

// let multiplicar = resultado*12;
// console.log(multiplicar);

// let dividir = multiplicar/12;
// console.log(dividir);

// let resto = dividir%3;
// console.log(dividir);



// function contarDeA_n(contar_de_a, contar_hasta) {
//     for (let i = 1; i <= contar_hasta; i += contar_de_a) {
//         console.log(i);
//     }
// }

// contarDeA_n(2, 10);

//FizzBuzz

// function FizzBuzz(palabra1, palabra2) {
//  for (let i = 1; i <= 100; i++) {
//        // Primero verificamos si es múltiplo de ambos 3 y 5
//       if (i % 3 === 0 && i % 5 === 0) {
//            console.log(palabra1 + palabra2);
//   } 
//         // Luego verificamos si es múltiplo de 3
//         else if (i % 3 === 0) {
//             console.log(palabra1);
//         } 
//          // Luego verificamos si es múltiplo de 5
//          else if (i % 5 === 0) {
//             console.log(palabra2);
//          } 
//          // Si no es múltiplo de ninguno de los anteriores, imprimimos el número
//        else {
//           console.log(i);
//          }
//    }
// }
// Ejemplo de uso
//FizzBuzz('Fizz', 'Buzz');

//fizzbuzz2

function fizzBuzz2(string1, string2, limit, fizz_num, buzz_num) {
    let result = [];

    for (let i = 1; i <= limit; i++) {
        if (i % fizz_num === 0 && i % buzz_num === 0) {
            result.push(string1 + string2);
        } else if (i % fizz_num === 0) {
            result.push(string1);
        } else if (i % buzz_num === 0) {
            result.push(string2);
        } else {
            result.push(i);
        }
    }

    // Unir los elementos del array en un solo string separado por comas
    return result.join(", ");
}

// Ejemplo de uso:
console.log(fizzBuzz2('Hola', 'Mundo', 50, 2, 7));

