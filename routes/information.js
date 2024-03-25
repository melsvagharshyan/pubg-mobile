import { Router } from "express";
import { createInformation } from "../controllers/posts/create-information.js";

const router = Router();

router.post("/", createInformation);

export default router;
