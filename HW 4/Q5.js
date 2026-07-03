"use strict";
class Stud {
    markAttendance(isPresent) {
        if (isPresent) {
            return "Student attendance marked as present";
        }
        else {
            return "Student attendance marked as absent";
        }
    }
}
const std = new Stud();
console.log(std.markAttendance(true));
console.log(std.markAttendance(false));
