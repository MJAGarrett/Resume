import express from "express";

const app = express();

app.use("/", express.static("public"));

const port = 3000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
