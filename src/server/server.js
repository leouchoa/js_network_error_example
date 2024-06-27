import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

const CLIENT_PATH = process.env.CLIENT_PATH || path.resolve("src/client");

// const PORT = 8080;
const PORT = 3000;

let app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

console.log(`Serving static files from: ${CLIENT_PATH}`);

app.use(express.static(CLIENT_PATH));
// --------------- GET ENDPOINTS --------------

app.get("/", (_, res) => {
  res.send("Hello User!");
});

// --------------- POST ENDPOINTS --------------

app.post("/request_sentiment", (_, res) => {
  console.log("server: Ive got the text!");
  res.send({ res: "post_response" });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
