// Rewrite the given code as it is seen by the interpreter

// Predict the outputs

// Run the original code and compare the outputs to your predictions


//1.
console.log(hello);                                   
var hello = 'world';                                 

//AS THE INTERPRETER READS IT:

var hello;
console.log(hello);
hello = 'world'

//2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//AS THE INTERPRETER READS IT:
var needle;
function test() {
    var needle;
    needle = 'magnet';
    console.log(needle)
}
test(); //'magnet'

//3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); // 'super cool'

//AS THE INTERPRETOR READS IT
var brendan; //undefined
function print() {
    brendan = 'only okay';
    console.log(brendan)
}
brendan = 'super cool';
console.log(brendan); // 'super cool'

//4. 
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//AS THE INTERPRETOR READS IT:

var food;
function eat() {
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food) // 'chicken'
eat(); //'half-chicken'

//5. 
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//AS THE INTERPRETOR READS IT:

// TypeError: mean is not a function

//6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//AS THE INTERPRETOR READS IT:

var genre;
function rewind() {
    var genre;
    genre = 'rock';
    console.log(genre);
    genre = 'r&b';
    console.log(genre);
}
console.log(genre); //undefined
genre = 'disco';
rewind(); //'rock','r&b'
console.log(genre); //'disco'

//7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//AS THE INTERPRETOR READS IT:

var dojo;
function learn() {
    var dojo;
    dojo = 'seattle';
    console.log(dojo);
    dojo = 'burbank';
    console.log(dojo);
}
dojo = 'san jose';
console.log(dojo); // 'san jose'
learn(); // 'seattle', 'burbank'
console.log(dojo); // 'san jose'

//8. 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//AS THE INTERPRETOR READS IT:

function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//Line 170 will break the code before it runs

console.log(makeDojo("Chicago", 65)); // {name: "Chicago", students: 65, hiring:true}
console.log(makeDojo("Berkeley", 0)); // Error trying to reassign a const variable on line 170














