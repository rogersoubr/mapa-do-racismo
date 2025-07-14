import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const authenticateToken = async (req, res, next) =>{
    try{
        const token = req.cookies.authToken;

        if(!token){
            return res.status(400).json({ error: "Token não fornecido"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);//verifica se o token é ok comporado com o jwt_secret
        //pegando usuario no prisma em comparação com o token
        const usuario = await prisma.usuario.findUnique({
            where:{id: decoded.usuarioID},
            select: {id:true, email: true, regras: true},
        });
        //se não tiverusuario
        if(!usuario){
            res.status(401).json({ error: "Usuário não encontrado" });
            return;
        }

        req.usuario = usuario;//coloca usuario achado na requisicao
        next();
    }catch(error){
        return res.status(401).json({ error: "Token inválido" });
    }
};

export const requireAdmin = (req, res, next) => {
    if(!req.usuario){
        return res.status(401).json({error: "Não autentificado"})
    }

    if(req.usuario.regras !== "ADMIN"){
        return res.status(403).json({error: "Acesso negado"})
    }

    next
}