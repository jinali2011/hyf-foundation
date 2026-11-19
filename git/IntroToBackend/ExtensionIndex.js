import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
const app = express();

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
// app.get("/", (request, response) => {
//   response.status(200).send(`
//       <h1>Main page</h1>
//       <h2>Shows main content</h2>`);
// });

app.get("/view", (request, response) => {
  response.status(200).send("View profile");
});

app.get("/add", (request, response) => {
  console.log("Your query: ", request.query); // you can access your request query

  if (!request.query.a && !request.query.b)
    // you can add some validation if the query is correct
    return response.send(`
    <h1> No values to add! </h1>
    Append <code>?a=2&b=3</code> to the url
  `);
  else {
    const { a, b } = request.query; // you can fetch the information from the query
    const sum = Number(a) + Number(b); // you can perform operations

    response.send(sum); // you can send back the output
  }
});

import knexLibrary from "knex";
const dbFile = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "tasks.sqlite3",
);
const knex = knexLibrary({
  client: "sqlite3",
  connection: {
    filename: dbFile,
  },
});

app.use(express.json());

app.get("/task", async (request, response) => {
  // we use async here to show that we are going to be awaiting something
  const tasks = await knex.raw(`SELECT * FROM task`);
  // we use 'await' to make sure get back the information from the database to send back to the client
  response.json(tasks);
});
app.post("/status", async (request, response) => {
  const { id, name } = request.body ?? {};

  if (!id || typeof name !== "string" || name.trim().length === 0)
    return response.sendStatus(400);

  await knex.raw("insert into status(id, name) values(?, ?)", [
    id,
    name.trim(),
  ]);
  response.sendStatus(200);
});

// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (request, response) => {
  const rows = await knex.raw("SELECT * FROM user ORDER BY id ASC;");
  response.json(rows);
});

app.get("/api/all-task", async (request, response) => {
  const tasks = await knex.raw("SELECT * FROM task ORDER BY id ASC");
  response.json(tasks);
});

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

app.get("/all-task", async (request, response) => {
  const tasks = await knex.raw("SELECT * FROM task");
  //const tasks = await knex.raw("SELECT * FROM task where 1=2");
  const rows = tasks
    .map(
      (task) => `
        <tr>
          <td>${escapeHtml(task.id)}</td>
          <td>${escapeHtml(task.title)}</td>
        </tr>`,
    )
    .join("");

  response.send(`<!DOCTYPE html>
    <html>
      <head>
        <title>All Tasks</title>
      </head>
      <body>
        <h1>All Tasks</h1>
        <table>
          <thead>
            <tr><th>ID</th><th>Title</th></tr>
          </thead>
          <tbody>${rows || "<tr><td colspan='2'>No tasks found.</td></tr>"}</tbody>
        </table>
      </body>
    </html>`);
});

app.post("/AddStatus", async (request, response) => {
  const { name } = request.body;

  if (typeof name !== "string" || name.trim().length === 0)
    return response.sendStatus(400);

  await knex.raw("insert into status(name) values(?)", [name.trim()]);
  response.sendStatus(200);
});

app.delete("/DeleteStatus", async (request, response) => {
  const { name } = request.body;

  if (typeof name !== "string" || name.trim().length === 0)
    return response.sendStatus(400);

  await knex.raw("delete from status where name = ? ", [name.trim()]);
  response.send(`<html><p>Successfully deleted ${name.trim()}.</p></html>`);
});
