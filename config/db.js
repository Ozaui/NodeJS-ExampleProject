import mongoose from "mongoose";

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Bağlantı başarılı");
    })
    .catch((err) => {
      console.error("MongoDB bağlantı hatası:", err);
    });
};

export default db;
