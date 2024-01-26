/*
    Przepisz podany niżej typ `Person` tak, aby funkcja `exam` działała poprawnie. i nie zwracała błędów.
*/

type Student2 = {
  type: "student";
  action: "takeExam";
};

type Teacher = {
  type: "teacher";
  action: "prepareExam";
};

type Person = Student2 | Teacher;

const exam = (person: Person) => {
  if (person.type === "student" && person.action === "takeExam") {
    console.log("Student is taking the exam");
  } else if (person.type === "teacher" && person.action === "prepareExam") {
    console.log("Teacher is preparing the exam");
  } else {
    // Handle invalid cases or do nothing
  }
};

const student: Student2 = {
  type: "student",
  action: "takeExam",
};

const teacher: Teacher = {
  type: "teacher",
  action: "prepareExam",
};

exam(student);
exam(teacher);
