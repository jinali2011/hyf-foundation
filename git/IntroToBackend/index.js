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

app.get("/all-task", async (request, response) => {
  // we use async here to show that we are going to be awaiting something
  const tasks = await knex.raw(`SELECT * FROM task`);
  // we use 'await' to make sure get back the information from the database to send back to the client
  response.json(tasks);
});
app.post("/status", async (request, response) => {
  const { id, name } = request.body;

  if (!id || !name || name.length === 0) return response.sendStatus(400);

  await knex.raw(`insert into status(id, name) values(${id}, "${name}")`);
  response.sendStatus(200);
});
app.use(express.json());

// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (request, response) => {
  const rows = await knex.raw("SELECT * FROM user ORDER BY id ASC;");
  response.json(rows);
});
