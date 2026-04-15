import api from './api';

// Obtener estadísticas del dashboard
export const getStats = async () => {
  try {
    const response = await api.get('/dashboard/stats');
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || 'Error al obtener estadísticas',
    };
  }
};

// Obtener clientes recientes
export const getClientesRecientes = async (limit = 5) => {
  try {
    const response = await api.get(`/dashboard/clientes-recientes?limit=${limit}`);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || 'Error al obtener clientes recientes',
    };
  }
};

// Obtener seguros próximos a vencer
export const getSegurosProximosVencer = async (dias = 30) => {
  try {
    const response = await api.get(`/dashboard/seguros-vencer?dias=${dias}`);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || 'Error al obtener seguros por vencer',
    };
  }
};