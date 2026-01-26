import { Router } from "express";
import {
  getPolizas,
  getPolizaById,
  getPolizasDeCliente,
  createPoliza,
  updatePoliza,
  deletePoliza
} from "../controllers/polizas.controller.js";

const router = Router();

router.get("/", getPolizas);
router.get("/:id", getPolizaById);

// nested (recomendado por tu UML)
router.get("/cliente/:clienteId", getPolizasDeCliente);

router.post("/", createPoliza);
router.put("/:id", updatePoliza);
router.delete("/:id", deletePoliza);

export default router;
