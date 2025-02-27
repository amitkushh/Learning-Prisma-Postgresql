import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import postRouter from "./routes/postRoute.js";
import commentRouter from "./routes/commentRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/comment", commentRouter);

app.get("/", (req, res) => {
  res.send({ message: "hello" });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
