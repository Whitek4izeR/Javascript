/* 

1. An Array is an object that uses numeric keys to access the values
  const array1 = [value1, value2,value3,value4];

2. An Object uses a key value pair
  const obj1 = {
    name: "Alice",        // key: value
    age: 25,
    greet: function() {   // method
    console.log("Hello!");
  }
};

3. arrays of objects
─────────────────────────────
// Sample #1
[
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" },
  { id: 3, name: "Charlie", role: "Editor" }
]

// Sample #2
📊 Visual Diagram: Arrays vs Objects in Enterprise Apps
API Response: Users List
─────────────────────────────
[
  {
    id: 1,
    name: "Alice",
    role: "Admin"
  },
  {
    id: 2,
    name: "Bob",
    role: "User"
  },
  {
    id: 3,
    name: "Charlie",
    role: "Editor"
  }
]

─────────────────────────────
🔹 Summary

a. Arrays → stable for ordered data
b. Objects → flexible for keyed data
c. Most modern apps use both together, often arrays of objects, especially in SMBs and enterprises.

*/


var guestList = ["Elizar", "Ariel", "Janskie", "Arlan", "Peter"];
var guestName = prompt("What is your name?");

if (guestList.includes(guestName)){
    alert("Welcome");
    console.clear();
} else {
    alert("You need to Register first");
    console.clear();
}
