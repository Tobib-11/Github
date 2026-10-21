import { Student } from "./student.ts";

const student1 = new Student("1001", 0,  "Tobi");

student1.printdata();

student1.name = "Thomas";
student1.note = 2;

student1.printdata();