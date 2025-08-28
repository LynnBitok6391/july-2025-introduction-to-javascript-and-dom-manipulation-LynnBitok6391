
let age = 20;
let name = "Alice";

if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}


function greetUser(username) {
  return "Hello, " + username + "!";
}


function addNumbers(a, b) {
  return a + b;
}

console.log(greetUser("Alice"));
console.log("5 + 3 = " + addNumbers(5, 3));


for (let i = 1; i <= 5; i++) {
  console.log("For Loop count: " + i);
}


let count = 1;
while (count <= 3) {
  console.log("While Loop count: " + count);
  count++;
}


document.getElementById("btnChange").addEventListener("click", function() {
  document.getElementById("message").textContent = "Text has been changed!";
});


document.getElementById("btnAdd").addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "New Item " + (document.querySelectorAll("#list li").length + 1);
  document.getElementById("list").appendChild(li);
});


document.getElementById("title").style.color = "green";
