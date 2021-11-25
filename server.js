const app = require("express")();

app.get("/", (req, res) => {
  res.send("Ok");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
