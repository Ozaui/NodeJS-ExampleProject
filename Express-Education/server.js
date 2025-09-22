import express from "express";
import userRoutes from "./routes/user.js";
import adminRoutes from "./routes/admin.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("node_modules"));
app.use("/static", express.static("public"));

app.use(adminRoutes);
app.use(userRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
