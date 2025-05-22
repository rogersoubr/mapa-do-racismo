import { v4 as uuid4 } from "uuid";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import { format } from "date-fns";
import path from "path";
import fs from "fs";
import fsPromises from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração do Express
const app = express();

// Configuração do CORS
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://127.0.0.1:8000"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.use(express.json());

// Função de log (mantida igual)
const logEvents = async (message, logFileName) => {
  const dateTime = `${format(new Date(), "yyyy-MM-dd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid4()}\t${message}\n`;

  try {
    const logsDir = path.join(__dirname, "..", "logs");
    if (!fs.existsSync(logsDir)) {
      await fsPromises.mkdir(logsDir);
    }
    await fsPromises.appendFile(path.join(logsDir, logFileName), logItem);
  } catch (err) {
    console.log("Erro na função LogEvents", err);
  }
};

// Middleware de logger (atualizado para usar CORS)
const logger = (req, res, next) => {
  logEvents(
    `${req.method}\t${req.url}\t${req.headers.origin}`,
    "Log_de_requisicao.log"
  );
  console.log(`${req.method} ${req.path}`);
  next();
};

app.use(logger);

export { app, logger, logEvents };