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
  ]
};
