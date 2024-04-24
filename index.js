const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      name: "rashmi",
      age: "34",
    },
    {
      id: "2",
      name: "himani",
      age: "32",
    },
    {
      id: "3",
      name: "jaya",
      age: "24",
    },
  ]);
});
app.listen(400, () => {
  console.log("app is running on 400 port ");
});
