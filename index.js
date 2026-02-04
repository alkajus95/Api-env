import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const { PORT = 3000, USER, PASSWORD } = process.env;

const app = express();
app.use(express.json());

// Log de credenciales
console.log({
  Usuario: USER,
  Password: PASSWORD,
});

// Endpoint para obtener datos
app.get('/Datos', (req, res) => {
  res.json({
    Usuario: USER,
    Password: PASSWORD,
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
