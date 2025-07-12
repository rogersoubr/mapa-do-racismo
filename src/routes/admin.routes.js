// Importando o pacote 'express' para criar as rotas
import express from 'express';
// Importando o controlador que contém as funções de CRUD
import adminController from '../controllers/admin.controller.js'; 

const router = express.Router();  // Criando um novo roteador do Express

// Definindo a rota POST para criar um novo Admin, que chama a função 'create' do controlador
router.post("/criar", adminController.create);

// Definindo a rota GET para obter todos os Admins, que chama a função 'findAll' do controlador
router.get("/", adminController.findAll);

// Definindo a rota GET para obter um Admin específico pelo ID, que chama a função 'findOne' do controlador
router.get("/:id", adminController.findOne);

// Definindo a rota PUT para atualizar um Admin específico pelo ID, que chama a função 'update' do controlador
router.put("/:id", adminController.update);

// Definindo a rota DELETE para excluir um Admin específico pelo ID, que chama a função 'delete' do controlador
router.delete("/:id", adminController.delete);

// Exportando o roteador para ser utilizado em outros arquivos
export default router;
