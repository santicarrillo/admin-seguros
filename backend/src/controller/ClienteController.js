import * as ClientesModel from "../models/clientes.model.js";

/**
 * GET /api/clientes?q=&empresa=&seguro=
 */
export function getClientes(req, res) {
  const { q = "", empresa, seguro } = req.query;

  const data = ClientesModel.getAll({ q, empresa, seguro });
  return res.json({ ok: true, data });
}

/**
 * GET /api/clientes/:id
 */
export function getClienteById(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ ok: false, message: "ID inválido" });
  }

  const cliente = ClientesModel.getById(id);

  if (!cliente) {
    return res.status(404).json({ ok: false, message: "Cliente no encontrado" });
  }

  return res.json({ ok: true, data: cliente });
}

/**
 * POST /api/clientes
 * body: { nombre, dni, empresa?, seguro? }
 */
export function createCliente(req, res) {
  const body = req.body ?? {};
  const { nombre, dni, empresa, seguro } = body;

  if (!nombre || !dni) {
    return res.status(400).json({
      ok: false,
      message: "nombre y dni son obligatorios",
    });
  }

  // DNI único
  if (ClientesModel.existsByDni(dni)) {
    return res.status(409).json({
      ok: false,
      message: "Ya existe un cliente con ese DNI",
    });
  }

  const nuevo = ClientesModel.create({
    nombre,
    dni,
    empresa: empresa || "Sin empresa",
    seguro: seguro || "Sin tipo",
    estadoPago: "al_dia",
  });

  return res.status(201).json({ ok: true, data: nuevo });
}

/**
 * PUT /api/clientes/:id
 * body: campos a actualizar (update parcial)
 */
export function updateCliente(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ ok: false, message: "ID inválido" });
  }

  const payload = req.body ?? {};

  // no permitir cambiar id
  if ("id" in payload) {
    return res.status(400).json({
      ok: false,
      message: "No se puede modificar el id",
    });
  }

  // validar DNI duplicado si lo mandan
  if (payload.dni && ClientesModel.existsByDni(payload.dni, id)) {
    return res.status(409).json({
      ok: false,
      message: "Ya existe un cliente con ese DNI",
    });
  }

  const updated = ClientesModel.updateById(id, payload);

  if (!updated) {
    return res.status(404).json({ ok: false, message: "Cliente no encontrado" });
  }

  return res.json({ ok: true, data: updated });
}

/**
 * DELETE /api/clientes/:id
 */
export function deleteCliente(req, res) {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ ok: false, message: "ID inválido" });
  }

  const deleted = ClientesModel.deleteById(id);

  if (!deleted) {
    return res.status(404).json({ ok: false, message: "Cliente no encontrado" });
  }

  return res.json({ ok: true, data: deleted });
}
