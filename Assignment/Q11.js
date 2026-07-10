"use strict";
class Student {
    markAttendance(isPresent) {
        if (isPresent) {
            console.log("Student is present.");
        }
        else {
            console.log("Student is absent.");
        }
    }
}
const student = new Student();
student.markAttendance(true);
