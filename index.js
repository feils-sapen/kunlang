import express from "express";

export const app = express();

const name = process.env.NAME || "鲲浪";
app.get("/", (req, res) => {
  res.send(`🤡 Hello, ${name}!`);
});

app.get("/about", (req, res) => {
  res.send(`my website is very good `);
});

app.listen(3000, () => {
  console.log(`${name} is listening on port 3000`);
});
