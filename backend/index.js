import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// endpoint de prueba
app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Backend funcionando" });
});

// LOGIN MOCK (para la prueba)
app.post("/api/login", (req, res) => {
  const { codigo, password } = req.body;

  if (codigo === "1234" && password === "1234") {
    return res.json({
      productor: {
        id: 1,
        nombre: "Santiago",
        matricula: "1234",
        email: "santi@mail.com",
      },
    });
  }

  return res.status(401).json({ message: "Credenciales inválidas" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
