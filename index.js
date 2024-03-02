const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("Hello World");
});

app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
 