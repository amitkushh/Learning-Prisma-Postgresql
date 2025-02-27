import {
  fetchPosts,
  searchPost,
  showPost,
  deletePost,
  createPost,
} from "../controllers/postController.js";
import express from "express";

const router = express.Router();

router.get("/", fetchPosts);
router.get("/search", searchPost);
router.get("/:id", showPost);
router.post("/", createPost);
router.delete("/:id", deletePost);

export default router;
