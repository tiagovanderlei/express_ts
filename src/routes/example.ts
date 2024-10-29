import { Router, Request, Response } from "express";
import dotenv from "dotenv";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log(">>> Entrou!");
  res.json({
    id: 1,
    name: "João",
    age: 18,
    env: process.env.NODE_ENV,
  });
});

export default router;
