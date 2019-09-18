//print out all even numbers between 0 and 10

for (let i = 0; i <= 10; i+=2){
    console.log(i)
}
// declare variables start, end, and step. write a for loop that starts at start, prints out every step variable, and ends with end.
let start = 0;
let end = 10;
let step = 2;

for (let i = start; i <= end; i += step) {
    console.log(i);
}

//print out the squares of all numbers between -20 to -10

let start = -20;
let end = 10;

for (let i = start; i <= end; i++) {
    console.log(i * i);
}

//question #3
let n = 10; 
let out = ""; 
for (let i = 0; i<n; i++){
    if (i % 2 == 1);
    {
        out = out + "#"
    }
}
console.log(out);
