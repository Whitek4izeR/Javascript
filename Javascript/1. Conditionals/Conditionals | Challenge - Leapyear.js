/* 

Leap Year Challenge Exercise
💪This is a Difficult Challenge 💪

Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video goes into more detail.

This is how to work out whether if a particular year is a leap year:

A year is a leap year if it is evenly divisible by 4 ;
except if that year is also evenly divisible by 100;
unless that year is also evenly divisible by 400.



e.g. Is the year 2000 a leap year?:

2000 ÷ 4 = 500 (Leap)
2000 ÷ 100 = 20 (Not Leap)
2000 ÷ 400 = 5 (Leap!)



So the year 2000 is a leap year.
But the year 2100 is not a leap year because:
2100 ÷ 4 = 525 (Leap)
2100 ÷ 100 = 21 (Not Leap)
2100 ÷ 400 = 5.25 (Not Leap)



Warning your output should match the Example Output format exactly, even the positions of the commas and full stops.

Example Input 1
  2400
Example Output 1
  Leap year.


Example Input 2
  1989
Example Output 2
  Not leap year.


Hint
- Remember that the modulo (%) operator gives you the remainder of a division. We covered this in this lesson.
- Try to visualise the rules by creating a flow chart on www.draw.io or excalidraw.com
- If you really get stuck, you can see the flow chart I created. [ See Leapyear #1 and #2 images in Assets folder ]
- Try to run your code in this Repl.it playground and check it against the known leap years.

*/


/* Given

function isLeap(year) {
    
/**************Don't change the code above****************/    
    
    //Write your code here.    


/**************Don't change the code below****************/    

}

*/

// Code
function isLeap(year) {
    const leap = year % 4;   
/**************Don't change the code above****************/    
    
if (leap === 0 && year % 100 !==0){
  return ("Leap year.");
}
if(year % 100 === 0 && year % 400 === 0){
  return ("Leap year.");
}  
else{
  return ("Not leap year.");
}

/**************Don't change the code below****************/    

}

var resultLeap = isLeap(1900);
console.log(resultLeap);


// Angela's Code

function isLeap(year) {
  const leap = year % 4;    
/**************Don't change the code above****************/    


if (year % 4 ===0){                // 1st Stage  
  if (year % 100 ===0){            // 2nd Stage
    if  (year % 400 ===0){         // 3rd Stage
      return("Leap year.");
    } else {                       // 3rd Stage - else
        return ("Not leap year");
    }
  } else {                         // 2nd Stage - else
      return ("Leap year.");
  }
} else {                           // 1st Stage  - else
    return ("Not leap year");
}




/**************Don't change the code below****************/    
}


var resultLeap = isLeap(2100);
console.log(resultLeap);




// ChatGPT's Code version #1

function isLeap(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return "Leap year.";
  } else {
    return "Not leap year.";
  }
}

// ChatGPT's Code version #2

function isLeap(year) {
  return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
    ? "Leap year."
    : "Not leap year.";
}


/*
Between the two, Elizar’s version is better ✅ — but it can still be improved.

Let’s break it down clearly.

🔎 1️⃣ Elizar’s Code – Why It’s Better
✅ Pros:

Uses flat conditions (no deep nesting)
Easier to read
Cleaner logic flow
Less indentation
Easier to maintain

❌ Small issue:

It checks % 4 once and stores it in leap, but still checks % 100 and % 400 separately — which is fine, just slightly redundant structure-wise.

🔎 2️⃣ Angela’s Code – What’s Different?
❌ Cons:

Deeply nested if statements
Harder to read
More indentation
More mental effort to follow the logic
It works correctly — but it’s less clean.

🏆 Best Version (Cleaner Than Both) */

// You can write it in one clean condition:

function isLeap(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return "Leap year.";
  } else {
    return "Not leap year.";
  }
}

// Or even shorter:

function isLeap(year) {
  return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
    ? "Leap year."
    : "Not leap year.";
}

/*
🎯 Final Verdict

🥇 Best logic structure → Single combined condition (cleanest)
🥈 Elizar’s version → Good, readable
🥉 Angela’s version → Works, but too nested

If you’re coding professionally, readability + simplicity wins every time.
If you'd like, I can explain why combining conditions is considered better practice in software development.

*/
