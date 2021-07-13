function newStudent() {
    console.log("New student is added to the system.");
}

newStudent();

var name = "John";
function newStudent(x) {
    console.log(`New student ${x} is added ot the system.`);
}
newStudent(name);

name = "John";
if (name == "John") {
    console.log(`Student name is ${name}`);
} else {
    console.log(`It's a different student. His/her name is ${name}.`);
}

name = "Hanna";
if (name == "John") {
    console.log(`Student name is ${name}`);
} else {
    console.log(`It's a different student. His/her name is ${name}.`);
}

name = "John";
if (name == "John") {
    console.log(`Student name is ${name}`);
} else {
    console.log(`It's a different student. His/her name is ${name}.`);
}

name = "Andrea";
if (name == "John") {
    console.log(`Student name is ${name}`);
} else if (name == "Hanna") {
    console.log(`It's a different student. His/her name is ${name}`);
} else if (name == "Michael") {
    console.log(`It's a new student. His/her name is ${name}`);
} else if (name == "Julie") {
    console.log(`It's a returning student. His/her name is ${name}`);
} else {
    console.log(`Sorry, no student by the name of ${name} exist.`);
}

var doorlocked = true;
var alarmon = false;
//Example 1: Using and (&&)
if ((doorlocked == true) && (alarmon == true)) {
    console.log("House secured");
} else {
    console.log("House not secured");
}

doorlocked = false;
alarmon = true;

//Example 2: Using or (||)
if ((doorlocked == true) || (alarmon == true)) {
    console.log("House secured");
} else {
    console.log("House not secured");
}


name = "Brent";
//switch statement
switch (name) {
    case 'John': // if (name == 'John')
        console.log(`Student name is ${name}`);
        break;

    case 'Hanna': // if (name == 'Hanna')
        console.log(`It's a different student. His/her name is ${name}`);
        break;

    default:
        console.log("No such student name exist");
        break;
}