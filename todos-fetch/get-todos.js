fetch("http://localhost:3000/todos/")
  .then((response) => response.json())
  .then((bodyData) => console.log(bodyData));
