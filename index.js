import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './database.js';

// Carrega as variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Logs de configuração
console.log('=== Configurações do Ambiente ===');
console.log(`NODE_ENV: ${process.env.NODE_ENV || 'development (padrão)'}`);
console.log(`JWT_SECRET: ${process.env.JWT_SECRET ? '*** (definida)' : 'Não definida'}`);
console.log(`DB_STORAGE: ${process.env.DB_STORAGE || 'Não definido'}`);
console.log('================================');

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});