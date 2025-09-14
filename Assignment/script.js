// === Part 1: Variable Declarations and Conditionals ===
let userName = "Ibrahim";
let isStudent = true;

if (isStudent) {
  console.log(`${userName} is a student at PLP Academy.`);
} else {
  console.log(`${userName} is not a student.`);
}

// === Part 2: Custom Functions ===
function greetUser(name) {
  return `Hello, ${name}! Welcome to your JavaScript assignment.`;
}

function multiplyNumbers(a, b) {
  return a * b;
}

// === Part 3: Loop Examples ===
function showNumbers() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += `Number ${i} <br>`;
  }
  document.getElementById("output").innerHTML = output;
}

function loopThroughArray() {
  const fruits = ["Apple", "Banana", "Cherry"];
  let output = "Fruits:<br>";
  for (let fruit of fruits) {
    output += `${fruit}<br>`;
  }
  document.getElementById("output").innerHTML = output;
}

// === Part 4: DOM Interactions ===
document.getElementById("greetBtn").addEventListener("click", () => {
  document.getElementById("output").innerHTML = greetUser(userName);
});

document.getElementById("loopBtn").addEventListener("click", () => {
  showNumbers();
  setTimeout(loopThroughArray, 1500);
});

document.getElementById("changeStyleBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = "#ffe0b2";
});
