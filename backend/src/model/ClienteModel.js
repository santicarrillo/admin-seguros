import { mockDB } from "../data/mock.db.js";

/**
 * SELECT * FROM clientes
 * con filtros opcionales
 */
export function getAll({ q = "", empresa, seguro } = {}) {
  return mockDB.clientes.filter((c) => {
    const matchQ =
      q === "" ||
      c.nombre.toLowerCase().includes(q.toLowerCase()) ||
      c.dni.includes(q);

    const matchEmpresa =
      !empresa || empresa === "todas" || c.empresa === empresa;

    const matchSeguro =
      !seguro || seguro === "todos" || c.seguro === seguro;

    return matchQ && matchEmpresa && matchSeguro;
  });
}

/**
 * SELECT * FROM clientes WHERE id = ?
 */
export function getById(id) {
  return mockDB.clientes.find((c) => c.id === id) || null;
}

/**
 * SELECT 1 FROM clientes WHERE dni = ? AND id != ?
 */
export function existsByDni(dni, excludeId = null) {
  return mockDB.clientes.some(
    (c) => c.dni === dni && c.id !== excludeId
  );
}

/**
 * INSERT INTO clientes (...)
 */
export function create(data) {
  const newId = mockDB.clientes.length
    ? Math.max(...mockDB.clientes.map((c) => c.id)) + 1
    : 1;

  const nuevo = {
    id: newId,
    nombre: data.nombre,
    dni: data.dni,
    empresa: data.empresa,
    seguro: data.seguro,
    estadoPago: data.estadoPago ?? "al_dia",
  };

  mockDB.clientes.push(nuevo);
  return nuevo;
}

/**
 * UPDATE clientes SET ... WHERE id = ?
 */
export function updateById(id, payload) {
  const index = mockDB.clientes.findIndex((c) => c.id === id);
  if (index === -1) return null;

  mockDB.clientes[index] = {
    ...mockDB.clientes[index],
    ...payload,
  };

  return mockDB.clientes[index];
}

/**
 * DELETE FROM clientes WHERE id = ?
 */
export function deleteById(id) {
  const index = mockDB.clientes.findIndex((c) => c.id === id);
  if (index === -1) return null;

  const deleted = mockDB.clientes.splice(index, 1)[0];
  return deleted;
}
