# Functions

- Functions may perform a task without returning a response.
- Functions may return a value that is the result of a task, e.g computeSum(a,b);
- The value returned from a function can be used wherever a value can be used.
```
let sum = computeSum(a,b)
```

#### Prompt
The prompt function shows a popup with a textbox and allows the user to enter a value.

#### Math Object
The ```Math``` object provides lots of math related functions.
Examples:
- ```let min = Math.min(a,b);```
- ```let sqrt = Math.sqrt(a);```

#### Random Numbers
The ```Math.random()``` generates random floating number.

#### Number
The ```Number``` function conversta ny other value to its number representation
- ```let age = Number(prompt("Age: "));```

#### parseInt
The ```parseInt``` function parses the integer part of a string until a non-int character is found.
- ```let val = parseInt("200 years");```

#### parseFloat
Parses a string and returns a floating point number. It parses the string until it reaches the end of the number, and returns the number as a number, not a string. 

#### String
The ```String``` function converts any other value to its string representation
- ```let isRight = String(true);```

#### isNaN
The ```isNan``` function checks if a value is not a number.
- ```isNan(False) //False```

# Functions
A function consists of the following parts:
- Name
- Parameters
- Body
- Return Value: Functions may return a value using the ```return``` keyword followed by an expression

## Function Notations
#### Declaration notation
Start with the ```function``` keyword followed by an identifier, an optional list of parameters and the function body.
```
function printHello() {
    console.log("Hello");
}
function area(width, length) {
    return(width*length);
}
```

#### Variable notation
Declaring a const variable assigned to the function.
``` 
const printHello = function(){
    console.log("Hello")
}
```

#### Arrow notation
```
const printWelcome = () => {
    console.log("Hello");
}
```

## Calling a Function
Calling a function is done by the function name followed by arguments within a pair of parenthesis.
```
var person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
person.fullName(); // Will return "John Doe"
```