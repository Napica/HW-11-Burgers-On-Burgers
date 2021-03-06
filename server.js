// DEPENDENCIES 
const exphbs = require("express-handlebars");
const express = require("express");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// EXPRESS MIDDLEWARE
// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// HANDLEBAR's MIDDLEWARE
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Imports routes and able to access the server 
const routes = require ("./controllers/burgers_controller.js")
app.use(routes);

// LISTENING TO PORTS
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
