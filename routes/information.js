import { Router } from "express";
import {
  createInformation,
  getInformation,
} from "../controllers/posts/create-information.js";

const router = Router();

router.post("/", createInformation);
router.get("/", getInformation);

export default router;
