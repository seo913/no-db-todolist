const express = require("express");
const cors = require("cors");
const todoRouter = require("./routes/todo");
const app = express();

const port = 3030;

app.use(cors({  //소통하고있는 프론트엔드만
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());
app.use("/todo", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});