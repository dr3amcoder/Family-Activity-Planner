import express from "express";
import { activities } from "../data/activities.js";

const router = express.Router();

router.get("/", (_request, response) => {
  response.json(activities);
});

export default router;
