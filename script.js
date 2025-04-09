var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy",
];

for (var i = 0; i < todos.length; i++) {
  todos[i] = todos[i] + "!";
  console.log(todos[i]);
}

var todosLength = todos.length;
console.log(todosLength);

for (var i = 0; i < todosLength; i++) {
  todos.pop();
  console.log(todos[i]);
}
