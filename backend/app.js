const express = require('express');
const cors = require('cors');
const connectToDb = require('./utils/connectToDb');
const bookRoutes =require("./routes/bookRoutes")

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

app.use("/api/books",bookRoutes)

connectToDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
});

