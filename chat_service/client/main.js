const express = require("express");
const app = express();
app.use(express.static("public"));
const server = app.listen(3001, () => {
  console.log(server.address());
})
