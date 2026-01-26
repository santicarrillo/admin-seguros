import * as Polizas from "../model/polizasmodel.js";
import * as Clientes from "../models/clientes.model.js"; // asumimos que ya existe

export function getPolizas(req, res) {
  const { clienteId, estado, numeroPoliza } = req.query;
  const data = Polizas.getAll({ clienteId, estado, numeroPoliza });
  return res.json({ ok: true, data });
}

export function getPolizaById(req, res) {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ ok: false, message: "ID inválido" });

  const poliza = Polizas.getById(id);
  if (!poliza) return res.status(404).json({ ok: false, message: "Póliza no encontrada" });

  return res.json({ ok: true, data: poliza });
}

export function getPolizasDeCliente(req, res) {
  const clienteId = Number(req.params.clienteId);
  if (Number.isNaN(clienteId)) return res.status(400).json({ ok: false, message: "clienteId inválido" });

  // validar que el cliente exista (opcional pero pro)
  const cliente = Clientes.getById(clienteId);
  if (!cliente) return res.status(404).json({ ok: false, message: "Cliente no encontrado" });

  const data = Polizas.getByClienteId(clienteId);
  return res.json({ ok: true, data });
}

export function createPoliza(req, res) {
  const body = req.body ?? {};
  const {
    numeroPoliza,
    clienteId,
    idTipoSeguro,
    fechaInicio,
    fechaVencimiento,
    montoAsegurado,
    primaTotal,
    cantidadCuotas
  } = body;

  if (!numeroPoliza || !clienteId || !idTipoSeguro || !fechaInicio || !fechaVencimiento) {
    return res.status(400).json({ ok: false, message: "Faltan campos obligatorios" });
  }

  const cId = Number(clienteId);
  if (Number.isNaN(cId)) return res.status(400).json({ ok: false, message: "clienteId inválido" });

  const cliente = Clientes.getById(cId);
  if (!cliente) return res.status(404).json({ ok: false, message: "Cliente no encontrado" });

  const nueva = Polizas.create({
    numeroPoliza,
    clienteId: cId,
    idTipoSeguro: Number(idTipoSeguro),
    fechaInicio,
    fechaVencimiento,
    montoAsegurado: Number(montoAsegurado ?? 0),
    primaTotal: Number(primaTotal ?? 0),
    cantidadCuotas: Number(cantidadCuotas ?? 1),
    estadoPoliza: "activa"
  });

  return res.status(201).json({ ok: true, data: nueva });
}

export function updatePoliza(req, res) {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ ok: false, message: "ID inválido" });

  const payload = req.body ?? {};
  if ("id" in payload) return res.status(400).json({ ok: false, message: "No se puede modificar id" });

  const updated = Polizas.updateById(id, payload);
  if (!updated) return res.status(404).json({ ok: false, message: "Póliza no encontrada" });

  return res.json({ ok: true, data: updated });
}

export function deletePoliza(req, res) {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ ok: false, message: "ID inválido" });

  const deleted = Polizas.deleteById(id);
  if (!deleted) return res.status(404).json({ ok: false, message: "Póliza no encontrada" });

  return res.json({ ok: true, data: deleted });
}
