const { Router } = require('express');
const userController = require('../controller/user.controller');
const { authenticateToken } = require('../middleware/auth');

const userRoutes = Router();

// Middleware de autenticação para todas as rotas
userRoutes.use(authenticateToken);

// Rotas de usuário
userRoutes.get('/profile', userController.getUserProfile); // Obter perfil do usuário logado
userRoutes.put('/profile', userController.updateProfile); // Atualizar perfil
userRoutes.delete('/account', userController.deleteAccount); // Deletar própria conta

module.exports = userRoutes;