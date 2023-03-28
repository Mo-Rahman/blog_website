const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let posts = [];

const homeStartingContent =
  "HOME_CONTENTLacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque";
const aboutContent =
  "ABOUT_CONTENT__Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque rhoncus est pellentesque elit ullamcorper.";
const contactContent =
  "CONTACT CONTENT _Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque justo nec ultrices. Arcu dui vivamus arcu felis";

app.get("/", (req, res) => {
  // let title = posts[0].title;
  // let message = posts[0].message;
  res.render("home", { homeContent: homeStartingContent, posts: posts });
  // console.log(title);
  // console.log(message);
});

app.get("/about", (req, res) => {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  const message = req.body.textarea;
  const title = req.body.publish;
  const post = {
    title: title,
    message: message,
  };
  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:topicName", (req, res) => {
  const requestedTopic = req.params.topicName;

  posts.forEach((post) => {
    const postTopic = post.title;
    const message = post.message;
    if (_.lowerCase(postTopic) === _.lowerCase(requestedTopic)) {
      console.log("Match Found");
      res.render("post", { title: postTopic, message: message });
    }
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
