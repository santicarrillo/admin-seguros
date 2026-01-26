import { mockDB } from "../data/mock.db.js";

// SELECT * FROM polizas WHERE ...
export function getAll({ clienteId, estado, numeroPoliza } = {}) {
  return mockDB.polizas.filter((p) => {
    const matchCliente = !clienteId || p.clienteId === Number(clienteId);
    const matchEstado = !estado || p.estadoPoliza === estado;
    const matchNumero = !numeroPoliza || p.numeroPoliza === numeroPoliza;
    return matchCliente && matchEstado && matchNumero;
  });
}

// SELECT * FROM polizas WHERE id = ?
export function getById(id) {
  return mockDB.polizas.find((p) => p.id === id) || null;
}

// SELECT * FROM polizas WHERE clienteId = ?
export function getByClienteId(clienteId) {
  return mockDB.polizas.filter((p) => p.clienteId === clienteId);
}

// INSERT INTO polizas (...)
export function create(data) {
  const newId = mockDB.polizas.length
    ? Math.max(...mockDB.polizas.map((p) => p.id)) + 1
    : 1;

  const nueva = {
    id: newId,
    numeroPoliza: data.numeroPoliza,
    clienteId: data.clienteId,
    idTipoSeguro: data.idTipoSeguro,
    fechaInicio: data.fechaInicio,
    fechaVencimiento: data.fechaVencimiento,
    montoAsegurado: data.montoAsegurado,
    primaTotal: data.primaTotal,
    estadoPoliza: data.estadoPoliza ?? "activa",
    cantidadCuotas: data.cantidadCuotas ?? 1
  };

  mockDB.polizas.push(nueva);
  return nueva;
}

// UPDATE polizas SET ... WHERE id = ?
export function updateById(id, payload) {
  const idx = mockDB.polizas.findIndex((p) => p.id === id);
  if (idx === -1) return null;

  mockDB.polizas[idx] = { ...mockDB.polizas[idx], ...payload };
  return mockDB.polizas[idx];
}

// DELETE FROM polizas WHERE id = ?
export function deleteById(id) {
  const idx = mockDB.polizas.findIndex((p) => p.id === id);
  if (idx === -1) return null;

  return mockDB.polizas.splice(idx, 1)[0];
}
