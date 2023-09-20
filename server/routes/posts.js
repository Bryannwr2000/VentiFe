import express from "express";

import { getPosts } from "../controllers/posts.js";
import { createPosts } from "../controllers/posts.js";

const router = express.Router();

// http://Localhost:/5000/posts since we added a prefix using middleware
router.get("/", getPosts);
router.post("/", createPosts);

export default router;
