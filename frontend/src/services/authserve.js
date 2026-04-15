import api from './api';

// Login
export const login = async (codigo, password) => {
  // Simular delay
  await new Promise(resolve => setTimeout(resolve, 500));

  if (codigo !== "1234") {
    return {
      success: false,
      error: "Usuario incorrecto",
    };
  }
  if (password !== "1234") {
    return {
      success: false,
      error: "Contraseña incorrecta",
    };
  }

  const user = {
    id: 1,
    nombre: "Santiago",
    matricula: "1234",
    email: "santi@mail.com",
  };
  const token = "mock-jwt-token";

  // Guardar en localStorage
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));

  return {
    success: true,
    user,
    token,
  };
};

// Registro
export const register = async (data) => {
  try {
    const response = await api.post('/auth/register', data);

    const { token, user } = response.data;

    // Guardar en localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    return {
      success: true,
      user,
      token,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || 'Error al registrarse',
    };
  }
};

// Logout
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/login';
};

// Verificar si está autenticado
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

// Obtener usuario actual
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
};

// Verificar token
export const verifyToken = async () => {
  try {
    const response = await api.get('/auth/verify');
    return response.data.valid;
  } catch (error) {
    return false;
  }
};