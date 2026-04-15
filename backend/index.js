import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "http://localhost:5174" }));
app.use(express.json());

// endpoint de prueba
app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Backend funcionando" });
});

// LOGIN MOCK (para la prueba)
app.post("/api/login", (req, res) => {
  const { codigo, password } = req.body;

  if (codigo !== "1234") {
    return res.status(401).json({ error: "Usuario incorrecto" });
  }
  if (password !== "1234") {
    return res.status(401).json({ error: "Contraseña incorrecta" });
  }

  return res.json({
    token: "mock-jwt-token",
    user: {
      id: 1,
      nombre: "Santiago",
      matricula: "1234",
      email: "santi@mail.com",
    },
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
