import { Router } from "express";
import {
  createInformation,
  deleteInformation,
  getInformation,
} from "../controllers/posts/create-information.js";

const router = Router();

router.post("/", createInformation);
router.get("/", getInformation);
router.delete("/remove/:id", deleteInformation);

export default router;
