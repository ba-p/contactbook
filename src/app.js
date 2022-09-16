const express = require("express");
const cors = require("cors");

const app = express();

const contactController = require("./controllers/contactController");

// Settings
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to contact book application. ",
  });
});

app
  .route(" / api / contacts ")
  .get(contactController.findA11)
  .post(contactController.create)
  .delete(contactController.deleteAll);
app
  .route(" / api / contacts / favorite ")
  .get(contactController.findAllFavorite);
app
  .route(" / api / contacts / : id ")
  .get(contactController.findone)
  .put(contactController.update)
  .delete(contactController.delete);

module.exports = app;
