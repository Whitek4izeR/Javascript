// Karel Challenge https://stanford.edu/~cpiech/karel/ide.html

/* Function
Less Shorter and Less Repetetive using Function */


// Challenge # 1 - Move 4 Times then go Up 4 Times - Long and Short Form using Functions

// The Long Form

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/

function main(){
   //your code here
   
move();
move();
move();
move();
turnLeft();
move();
move();
move();
move();

}

// Short Form using additional function - Modular Method


function main(){
   //your code here

moveFourTimes();
turnLeft();
moveFourTimes();

}

function moveFourTimes(){

move();
move();
move();
move();
  
}


// Challenge # 2 - Diagonal line of beepers put down from Bottom left corner to Upper right corner. 

// Long Form

function main(){
   //your code here

putBeeper();
move();
turnLeft();
move();
putBeeper();
turnRight();
move();
turnLeft();
move();
putBeeper();
turnRight();
move();
turnLeft();
move();
putBeeper();
turnRight();
move();
turnLeft();
move();
putBeeper();
}


// Short Form

function main(){
   //your code here

putBeeper();
moveDiagonalandPutbeeper();
moveDiagonalandPutbeeper();
moveDiagonalandPutbeeper();
moveDiagonalandPutbeeper();
}

function moveDiagonalandPutbeeper(){

move();
turnLeft();
move();
putBeeper();
turnRight();
  
}

// Challenge # 3 - Create Chessboard Patterns - Alternating tiles of Beeper

// Long Form

function main(){
   //your code here

// First Row
putBeeper();
move();
move();
putBeeper();
move();
move();
putBeeper();
turnLeft();

// 2nd Row
move();
turnLeft();
move();
putBeeper();
move();
move();
putBeeper();
move();
turnRight();

// 3rd Row
move();
putBeeper();
turnRight();
move();
move();
putBeeper();
move();
move();
putBeeper();
turnLeft();

// 4th Row

move();
turnLeft();
move();
putBeeper();
move();
move();
putBeeper();
move();
turnRight();


// 5th Row

move();
putBeeper();
turnRight();
move();
move();
putBeeper();
move();
move();
putBeeper();

}


// Short Form

function main(){
   //your code here

// First Row
putBeeper();
threeBeepers();
turnLeft();

// 2nd Row
move();
turnLeft();
twoBeepers();
turnRight();

// 3rd Row
move();
putBeeper();
turnRight();
threeBeepers();
turnLeft();

// 4th Row

move();
turnLeft();
twoBeepers();
turnRight();

// 5th Row

move();
putBeeper();
turnRight();
threeBeepers();

}

function threeBeepers(){
move();
move();
putBeeper();
move();
move();
putBeeper();

}

function twoBeepers(){

move();
putBeeper();
move();
move();
putBeeper();
move();

}

// Angela Form

function main(){
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
}
 
function goUpTurnRight() {
   turnRight();
   move();
   turnRight();
}
 
function goUpTurnLeft() {
   turnLeft();
   move();
   turnLeft();
}
 
function beepersRight() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();  
}
 
function beepersLeft() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}


/* Errors

When using functions in programming, several typical errors may occur:

1. Syntax Errors: These are mistakes in the code structure, such as missing parentheses, brackets, or incorrect use of keywords. For example, forgetting to close a curly brace {} can prevent the function from executing.

2. Parameter Issues: Passing the wrong number or type of arguments to a function can lead to errors. If a function expects two parameters but receives only one, it can cause undefined behavior.

3. Variable Scope: Using variables outside of their defined scope can lead to errors. If a variable is declared inside a function, it cannot be accessed outside that function unless returned.

4. Return Statement: Forgetting to include a return statement can lead to functions not producing any output when they should. This is particularly common if you're expecting to get a value back from the function but don't use return.

5. Logic Errors: The code may compile and run, but not produce the expected results due to errors in logic. It's important to double-check the algorithm or calculations used within the function.

6. Library or API Misuse: When using functions from libraries or APIs, ensure the correct syntax and parameters are utilized. Familiarize yourself with documentation to avoid these errors.

Whenever you encounter an error, it's useful to take a step back, run through what you expect to happen versus what is actually happening, and look up any error messages you receive.
If you have specific errors or examples you need help with, feel free to share them for more tailored guidance!

*/
