/*
    Utwórz typ, zwracany przez funkcję `message`, który będzie aktualny niezależny od ciała funkcji `message`.
*/
type MessageReturnType = string | number | Error;

const message = (input: unknown): MessageReturnType => {
  if (typeof input === "string") {
    return `message: ${input}`;
  } else if (typeof input === "number") {
    return input;
  } else {
    return new Error("Invalid type");
  }
};

const result1: MessageReturnType = message("Hello"); // string
const result2: MessageReturnType = message(2); // number
const result3: MessageReturnType = message(true); // Error

console.log(result1, result2, result3);
