import {
  fetchComments,
  createComment,
  showComment,
  deleteComment,
} from "../controllers/commentController.js";
import express from "express";

const router = express.Router();

router.get("/", fetchComments);
router.get("/:id", showComment);
router.post("/", createComment);
router.delete("/:id", deleteComment);

export default router;
