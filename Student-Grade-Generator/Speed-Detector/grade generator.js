function studentGradeGenerator() {
    let marks = prompt("Enter student marks (0-100):");
    marks = parseInt(marks);

    if (marks > 79) {
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 50 && marks <= 59) {
        return "C";
    } else if (marks >= 40 && marks <= 49) {
        return "D";
    } else {
        return "E";
    }
}

console.log(studentGradeGenerator());