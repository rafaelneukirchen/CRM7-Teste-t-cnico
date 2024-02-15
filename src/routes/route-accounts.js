import express from "express";
import { ConsultAllAccountsController } from "../controllers/consult-all-accounts-controller.js";

const router = express.Router();

router.get("/accounts", new ConsultAllAccountsController().handle);

export default router;
