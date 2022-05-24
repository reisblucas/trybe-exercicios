import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`I'm listening you on port ${PORT}`);
});

