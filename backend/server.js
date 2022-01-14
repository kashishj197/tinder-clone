import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import Cards from "./dbCards.js";

// App config
const app = express();
const PORT = process.env.PORT || 8001;
const connectionUrl = `mongodb+srv://kashishj:pass123@cluster0.ooxpo.mongodb.net/tinderdb?retryWrites=true&w=majority`;

// Middlewares
app.use(express.json());
app.use(cors());

// Db config
mongoose.connect(
  connectionUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello Dude!!"));

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
// Listner
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
