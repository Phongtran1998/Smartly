const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
if (process.env.NODE_ENV === "production") {
  //Express will serve up the production assets
  app.use(express.static(__dirname + "/smartly-io-challenge/build"));
  //Express will serve up the index.html if
  //it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "smartly-io-challenge", "build", "index.html")
    );
  });
}
app.get("/facts/randoms", async (req, res) => {
  try {
    const response = await axios.get(
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5"
    );
    res.send(response.data);
  } catch (e) {
    res.status(400).send({ error: "Something went wrong" });
  }
});

app.listen(process.env.PORT || 4000);
