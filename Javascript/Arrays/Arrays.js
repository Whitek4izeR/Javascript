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

🔹 Breakdown
Layer	Type	Purpose
Outer container	Array	Maintains order of users; easy to loop (forEach, map)
Each element	Object	Stores structured properties for each user (id, name, role)

🔹 How It’s Used in Code

users.forEach(user => {
  console.log(user.name + " is a " + user.role);
});

Output:

Alice is a Admin
Bob is a User
Charlie is a Editor

.forEach → works because outer container is an array
user.name → works because each element is an object

🔹 Real-World Analogy

Array → like a queue of records in a table
Object → like columns of each record

So most enterprise apps never use just arrays or just objects — they combine them for structured, ordered, and flexible data.


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
