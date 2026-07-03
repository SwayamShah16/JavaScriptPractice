const marks = [80, 90, 70, 60, 50];
function filterPassedStudents(marks) {
    return marks.filter(mark => mark >= 70);
}
console.log(filterPassedStudents(marks));