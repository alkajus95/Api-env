import express from 'express';
import dotenv from 'dotenv';
import figlet from 'figlet';
import chalk from 'chalk';
import cors from 'cors';

dotenv.config();

const { PORT = 3000, USER, PASSWORD } = process.env;

const app = express();
app.use(express.json());
app.use(cors());

// Log de credenciales
console.log(
  chalk.bgBlue.white('\n 🔐 CREDENCIALES \n'),
  chalk.cyan(`Usuario: ${USER}`),
  chalk.cyan(`Password: ${PASSWORD}\n`)
);

// Endpoint para obtener datos
app.get('/Datos', (req, res) => {
  res.json({
    Usuario: USER,
    Password: PASSWORD,
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  figlet('API Server', (err, data) => {
    if (!err) console.log(chalk.green(data));
    console.log(chalk.bgGreen.black.bold(`  ✅ Servidor corriendo en puerto ${PORT}  \n`));
  });
});
