let classRoster = ["Alice", "Tom", "Charlie", "Diana", "Evan"]

console.log(classRoster)

console.log(classRoster.toString())

classRoster.push("Fiona", "Nancy")

console.log(classRoster.shift())

console.log(classRoster)

console.log(classRoster.length)

//Ex
let classInfo = {
    className: 'ENSF381: Full-Stack Web Development',
    instructor: 'Dr. Smith',
    students: classRoster,
    details: {
        semester: 'Winter',
        year: 2025
    }

}

classInfo.schedule = ['Monday', 'Wednesday', 'Friday'];
classInfo.instructor = 'Dr. Abdellatif';
console.log(classInfo.className);
console.log(classInfo.instructor);
console.log(classInfo.students);
console.log(classInfo.details.semester);
console.log(classInfo);

let {className, instructor, students, details} = classInfo;
let {semester, winter} = details;
let [student1, student2, ...remainingStudents] = classRoster;

console.log(student1)
console.log(student2)
console.log(remainingStudents)