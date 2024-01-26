/*
    Stwórz funkcję która będzie mogła przyjmować wiele argumentów typu number lub string.
    Dopisz do tej funkcji ciało, które zwróci sumę wszystkich liczb.
    Jeśli podana liczba będzie stringiem należy ją sparsować do typu number.

    Dodaj do funkcji argument boolean, na podstawie któego zwracany wynik będzie typu number lub string.
*/

function sum(
  returnAsString: boolean,
  firstNumber: string | number,
  ...restOfNumbers: (string | number)[]
): number | string {
  let sum: number = +firstNumber;

  for (let i = 0; i < restOfNumbers.length; i++) {
    sum += +restOfNumbers[i];
  }

  return returnAsString ? sum.toString() : sum;
}

let resultNumeric = sum(false, 4, "5", 3, "2");
console.log(resultNumeric); // resultNumeric: 14

let resultString = sum(true, 4, "5", 3, "2");
console.log(resultString); // resultString: "14"
