import express from "express";

const data = {
  title: "Populer kurslar",
};

const router = express.Router();

router.use("/blogs/:BlogId", (req, res) => {
  //   res.sendFile(join(__dirname, "../views/users", "blog-details.html"));
  res.render("users/blog-details");
});

router.use("/blogs", (req, res) => {
  res.render("users/blogs");
});

router.use("/", (req, res) => {
  res.render("users/index", data);
});

export default router;
