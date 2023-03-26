const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis";

app.get("/", (req, res) => {
  res.render("home", {
    homeContent: homeStartingContent,
    // aboutContent: aboutContent,
    // contactContent: contactContent,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// app.get("/", (req, res) => {
//   // The lists.ejs needs to be in a views folder.
//   let dayAndDate = date.getDate();

//   res.render("lists", { listTitle: dayAndDate, newListItems: items });
// });
