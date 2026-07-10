interface Attendance {
    markAttendance(isPresent: boolean): void;
}

class Student implements Attendance {
    markAttendance(isPresent: boolean): void {
        if (isPresent) {
            console.log("Student is present.");
        } else {
            console.log("Student is absent.");
        }
    }
}

const student = new Student();
student.markAttendance(true);