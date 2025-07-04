import axios from 'axios';

// Garante que a URL do backend tenha o protocolo HTTPS.
const getBackendUrl = () => {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL || 'liveturb.com';
  if (url.startsWith('http')) {
    return url;
  }
  return `https://` + url.replace(/^https?:\/\//, '');
};

const instance = axios.create({
  baseURL: getBackendUrl(),
  withCredentials: true, // Permite envio de cookies cross-site
  headers: {
    'X-Requested-With': 'XMLHttpRequest', // Identifica a requisição como AJAX para o Laravel
  },
});

// Opcional: Adicionar interceptors para tratamento de erros global, etc.
// instance.interceptors.response.use(response => response, error => {
//   // Tratamento de erros como 401 Unauthorized, etc.
//   return Promise.reject(error);
// });

export default instance;