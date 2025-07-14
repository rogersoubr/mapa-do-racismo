import express from 'express';
import  UsuarioController from '../controllers/user.controller.js';
import  { authenticateToken, requireAdmin } from '../middlewares/authenticate.middlewares.js';

const usuarioRoutes = express.Router();



// Middleware de autenticação para todas as rotas
usuarioRoutes.use(authenticateToken);//se ta logado
usuarioRoutes.use(requireAdmin);//se e admim

// Rotas de usuário
//tem que criar o swagger aqui meus amores
usuarioRoutes.get('/usuarios', UsuarioController.listarUsuarios); // Obter perfil do usuário logado
usuarioRoutes.get('/status', UsuarioController.statusRegra); // rota para ler as estatísticas dos usuários
usuarioRoutes.delete('/deletar/:id', UsuarioController.deletarUsuario); // Deletar por id

export default usuarioRoutes;