import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.use("/admin/blogs/:blogId", (req, res) => {
  res.render("admin/blog-edit");
});

router.use("/admin/blogs", (req, res) => {
  res.render("admin/blog-list");
});

router.use("/admin/blog/create", (req, res) => {
  res.render("admin/blog-create");
});

export default router;
