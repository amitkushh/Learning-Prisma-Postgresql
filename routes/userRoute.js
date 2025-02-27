import {
  fetchUsers,
  createUser,
  showUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

import express from "express";

const router = express.Router();

router.get("/", fetchUsers);
router.get("/:id", showUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
