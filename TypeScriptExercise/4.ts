/*
    Utwórz typ tuple, który przyjmie numer indeksu studenta, oraz jego ocenę, i nic więcej.
    Stwórz przykładową tablicę takich tupli.
*/

type StudentGradeTuple = [number, number];

const studentGrades: StudentGradeTuple[] = [
  [12345, 3],
  [12346, 3],
  [12347, 2],
  [12348, 5],
];

for (const [index, grade] of studentGrades) {
  console.log(`Student ${index} received a grade of ${grade}`);
}
