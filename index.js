const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// design file
app.use(express.static("public"));
app.set("view engine", "ejs");

// routers
app.get("/", (req, res) => {
  article = null;

  res.render("index", article);
});

function ArticleData(id) {
  const article = {
    blockchain: { title: "Mengenai Blockchain", content: "Isi artikel tentang Blockchain." },
    bitcoin: { title: "Mengenai Bitcoin", content: "Isi artikel tentang Bitcoin." },
    solana: { title: "Mengenai Solana", content: "Isi artikel tentang Solana." },
  };

  return article[id];
}

app.post("/article", (req, res) => {
  const articleId = req.body.id;
  const article = ArticleData(articleId);

  if (article) {
    res.json(article);
  } else {
    res.status(404).send("Article not found");
  }
});

app.listen(PORT, () => {
  console.log(`The app start on http://localhost:${PORT}`);
});
