const http = require("http");
const url = require("url");

let todos = [
  { id: 1, task: "Learn Node.js" },
  { id: 2, task: "Practice Git" },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // GET /todos
  if (method === "GET" && path === "/todos") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(todos));
  }

  // GET /todos/:id
  if (method === "GET" && path.startsWith("/todos/")) {
    const id = parseInt(path.split("/")[2]);
    const todo = todos.find((t) => t.id === id);

    if (!todo) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Todo not found" }));
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(todo));
  }

  // POST /todos
  if (method === "POST" && path === "/todos") {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => {
      const newTodo = JSON.parse(body);
      newTodo.id = todos.length + 1;
      todos.push(newTodo);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newTodo));
    });
    return;
  }

  // PUT /todos/:id
  if (method === "PUT" && path.startsWith("/todos/")) {
    const id = parseInt(path.split("/")[2]);
    let body = "";

    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => {
      const updatedData = JSON.parse(body);
      const index = todos.findIndex((t) => t.id === id);

      if (index === -1) {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "Todo not found" }));
      }

      todos[index].task = updatedData.task;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(todos[index]));
    });
    return;
  }

  // DELETE /todos/:id
  if (method === "DELETE" && path.startsWith("/todos/")) {
    const id = parseInt(path.split("/")[2]);
    const index = todos.findIndex((t) => t.id === id);

    if (index === -1) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Todo not found" }));
    }

    const deleted = todos.splice(index, 1);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(deleted[0]));
  }

  // 404
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));
});

server.listen(3000, () => {
  console.log("TODO API running on port 3000");
});
