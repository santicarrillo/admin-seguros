export const mockDB = {
  productores: [
    {
      id: 1,
      codigo: "1234",
      password: "1234", // después se hashea
      nombre: "Santiago Carrillo",
      activo: true
    }
  ],

  clientes: [
    {
      id: 1,
      nombre: "Juan Pérez",
      dni: "30111222",
      empresa: "Sancor",
      seguro: "Automotor",
      estadoPago: "al_dia"
    },
    {
      id: 2,
      nombre: "María Gómez",
      dni: "28444555",
      empresa: "La Caja",
      seguro: "Hogar",
      estadoPago: "deuda"
    },
    {
      id: 3,
      nombre: "Lucas Fernández",
      dni: "33444999",
      empresa: "Federación Patronal",
      seguro: "Vida",
      estadoPago: "al_dia"
    }
  ],
   tiposSeguro: [
    { idTipo: 1, nombre: "Automotor", porcentajeComision: 0.12 },
    { idTipo: 2, nombre: "Hogar", porcentajeComision: 0.10 },
    { idTipo: 3, nombre: "Vida", porcentajeComision: 0.15 }
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
    }
  ],
  cuotas: [
    {
      idCuota: 1,
      polizaId: 1,
      numeroCuota: 1,
      monto: 20000,
      fechaVencimiento: "2025-02-01",
      pagada: true,
      fechaPago: "2025-02-01",
      montoMora: 0
    },
    {
      idCuota: 2,
      polizaId: 1,
      numeroCuota: 2,
      monto: 20000,
      fechaVencimiento: "2025-03-01",
      pagada: false,
      fechaPago: null,
      montoMora: 0
    }
  ],

  pagos: [
    {
      idPago: 1,
      idCuota: 1,
      monto: 20000,
      fechaPago: "2025-02-01",
      metodoPago: "Transferencia",
      comprobante: "TRX-0001"
    }
  ]
};
