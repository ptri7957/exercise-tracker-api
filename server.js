const express = require("express");
const path = require("path");

const connectDB = require("./config/db");
const exercise = require("./routes/api/exercise");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/exercise/", exercise);

app.use(express.static("client/build"));

if(process.env.NODE_ENV === "production"){
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running at ${port}`));
