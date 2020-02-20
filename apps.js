/*
//Scope-global and local example
let num = 5;
function showSquare() {
 let sq = num * num;
 alert(sq);
}
showSquare();
console.log(sq); // ERROR
*/



//Auto global scope example
//Don't forget to use let or const
let num = 5;
function showSquare() {
 sq = num * num;
 alert(sq);
}
showSquare();
console.log(sq); //25 (auto global)


// Scope A: Global scope out here
function greet() {
    // Scope B: Local scope in here
    let greeting = 'Hello World!';

    console.log(greeting); // Hello World!
}

/*
//logging outside will produce an error
console.log(greeting); // Uncaught ReferenceError: greeting is not defined
*/

console.log('Hello'); // Hello

{
    // Local scope
    var x = 2;
    let y = 4;

    console.log(x); // 2
    console.log(y); // 4
}

console.log(x); // 2
//console.log(y); // Uncaught ReferenceError: y is not defined

//Using the let keyword to declare the y variable we are encapsulating that variable inside the local scope. However the var keyword actually causes the variable to be hoisted to the global scope. The same rules are applied to loops and conditionals.

//Closure Example 1

function makeFunc() {
    let name = 'Covalence';
    function displayName() {
    alert(name);
    }
    return displayName;
   }
   let myFunc = makeFunc();
   myFunc();

 //Closure Example 2
   function greeter(personName) {
    return function() {
    alert('Hello ' + personName + '!');
    }
   }
   let greetJohn = greeter('John');
   let greetJane = greeter('Jane');
   greetJohn();
   greetJane();
   
   