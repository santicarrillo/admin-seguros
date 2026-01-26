import express from "express";
import cors from "cors";

import clientesRoutes from "./routes/clientes.routes.js";
import polizasRoutes from "./routes/polizas.routes.js";

const app = express();

// Middlewares
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "API funcionando" });
});

// Rutas
app.use("/api/clientes", clientesRoutes);
app.use("/api/polizas", polizasRoutes);

export default app;
