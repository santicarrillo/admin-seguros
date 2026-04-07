// Mock data para desarrollo sin backend
const mockDB = {
  productores: [
    {
      id: 1,
      codigo: "1234",
      password: "1234",
      nombre: "Santiago Carrillo",
      email: "santiago@mail.com",
      activo: true
    }
  ],

  clientes: [
    {
      id: 1,
      nombre: "Juan Perez",
      dni: "30111222",
      empresa: "Sancor",
      seguro: "Automotor",
      estadoPago: "al_dia"
    },
    {
      id: 2,
      nombre: "Maria Gomez",
      dni: "28444555",
      empresa: "La Caja",
      seguro: "Hogar",
      estadoPago: "deuda"
    },
    {
      id: 3,
      nombre: "Lucas Fernandez",
      dni: "33444999",
      empresa: "Federacion Patronal",
      seguro: "Vida",
      estadoPago: "al_dia"
    }
  ],

  polizas: [
    {
      id: 1,
      numeroPoliza: "POL-0001",
      clienteId: 1,
      idTipoSeguro: 1,
      fechaInicio: "2026-01-01",
      fechaVencimiento: "2026-12-31",
      montoAsegurado: 15000000,
      primaTotal: 120000,
      estadoPoliza: "activa",
      cantidadCuotas: 6
    },
    {
      id: 2,
      numeroPoliza: "POL-0002",
      clienteId: 2,
      idTipoSeguro: 2,
      fechaInicio: "2026-02-01",
      fechaVencimiento: "2027-02-01",
      montoAsegurado: 5000000,
      primaTotal: 80000,
      estadoPoliza: "activa",
      cantidadCuotas: 12
    }
  ]
};

// Simular delay de red
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// API mock functions
export async function login(codigo, password) {
  await delay(300);
  
  const productor = mockDB.productores.find(
    p => p.codigo === codigo && p.password === password && p.activo
  );
  
  if (!productor) {
    throw new Error("Codigo o contrasena incorrectos");
  }
  
  const { password: _, ...productorSinPassword } = productor;
  return { ok: true, productor: productorSinPassword };
}

export async function registro(nombre, codigo, email, password) {
  await delay(300);
  
  const existente = mockDB.productores.find(p => p.codigo === codigo);
  if (existente) {
    throw new Error("Ya existe un productor con ese codigo");
  }
  
  const newId = mockDB.productores.length
    ? Math.max(...mockDB.productores.map(p => p.id)) + 1
    : 1;
  
  const nuevoProductor = {
    id: newId,
    codigo,
    password,
    nombre,
    email: email || "",
    activo: true
  };
  
  mockDB.productores.push(nuevoProductor);
  
  const { password: _, ...productorSinPassword } = nuevoProductor;
  return { ok: true, productor: productorSinPassword };
}

export async function getClientes() {
  await delay(200);
  return { ok: true, data: mockDB.clientes };
}

export async function getPolizas() {
  await delay(200);
  return { ok: true, data: mockDB.polizas };
}

export async function getStats() {
  await delay(200);
  return {
    clientes: mockDB.clientes.length,
    polizasActivas: mockDB.polizas.filter(p => p.estadoPoliza === "activa").length,
    pagosPendientes: mockDB.clientes.filter(c => c.estadoPago === "deuda").length
  };
}
