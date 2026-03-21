/*
The same as While Loop but we specify the number of loops to run
This a syntatic sugar - It just sweetens up the syntax and makes it a little bit easier for developers and programmers to write.
*/

/* ---------------------------------------
While Loop - is essentially checking for a state, so it's while something is true, so that can be while player one is alive.
And essentially you want to repeatedly run an instruction while the program is in a certain state.

For Loop - you're essentially trying to iterate.
You're trying to run a piece of code many many times and you're going to use the for loop to define how many times.

*/


// Syntax ---------------------------------------

for (i=0; i<2; i++) {
 console.log(i);
}

// modified FizzBuzz ---------------------------------------
function fizzBuzz() {

//write code here
for(var count = 1; count < 101; count++) {
if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
}    
else if (count % 3 === 0) {
    output.push("Fizz");
} 
else if (count % 5 === 0) {
    output.push("Buzz");
}

else {
    output.push(count);
}
}        
    console.log(output);    
}
