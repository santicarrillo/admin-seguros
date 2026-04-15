import api from './api';

// Obtener todos los clientes
export const getClientes = async () => {
  try {
    const response = await api.get('/clientes');
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || 'Error al obtener clientes',
    };
  }
};

// Obtener un cliente por ID
export const getCliente = async (id) => {
  try {
    const response = await api.get(`/clientes/${id}`);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || 'Error al obtener cliente',
    };
  }
};

// Crear cliente
export const createCliente = async (clienteData) => {
  try {
    const response = await api.post('/clientes', clienteData);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || 'Error al crear cliente',
    };
  }
};

// Actualizar cliente
export const updateCliente = async (id, clienteData) => {
  try {
    const response = await api.put(`/clientes/${id}`, clienteData);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || 'Error al actualizar cliente',
    };
  }
};

// Eliminar cliente
export const deleteCliente = async (id) => {
  try {
    await api.delete(`/clientes/${id}`);
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || 'Error al eliminar cliente',
    };
  }
};

// Obtener clientes deudores
export const getClientesDeudores = async () => {
  try {
    const response = await api.get('/clientes/deudores');
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || 'Error al obtener deudores',
    };
  }
};

// Buscar clientes
export const buscarClientes = async (criterio) => {
  try {
    const response = await api.post('/clientes/buscar', { criterio });
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || 'Error al buscar clientes',
    };
  }
};