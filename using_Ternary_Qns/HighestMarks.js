// Sample marks array
let marks = [85, 92, 78, 95, 88];

// Finding the highest marks using the ternary operator
let highestMarks = marks.reduce((max, current) => current > max ? current : max, marks[0]);

// Displaying the highest marks to the teacher
console.log("The highest marks scored by a student: " + highestMarks);
