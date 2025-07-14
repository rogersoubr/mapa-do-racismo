import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const AuthController = {
    //CRIAR USUÁRIO -----------------------------------------------------------
    async criar( req, res){
        try{
            const {email, senha, papel} =  req.body;
            //se enviou email e senha no input
            if(!email || !senha){
                return res.status(400).json({error: "Email e senha devem ser colocados! "});
            }
            //pegando email existente na tabela
            const existeUsusario =  await prisma.usuario.findUnique({
                where: {email},
            })
            //se existe é tchau
            if(existeUsusario){
                return res.status(400).json({error: "Usuário já existe"});//trocar depois para 'Email e senha devem ser colocados! '
            }

            //criando hash-cripto na senha com espaço de 10
            const hashSenha = await bcrypt.hash(senha, 10);
            //cria usuario com as tais definições (senha vai pro bd criptografada)
            const usuario = await prisma.usuario.create({
                data: {
                    email, 
                    senha: hashSenha,
                    papel: papel || "USER",
                },
            });
            //gera o JWTtoken que vai mandar para o front
            const token = jwt.sign(
                {
                    usuarioID: usuario.id,
                    email: usuario.email,
                    papel: usuario.papel
                },
                process.env.JWT_SECRET,
                {expiresIn: "24h"}
            )

            res.cookie("authToken", token,{
                httpOnly: true,
                secure: process.env.NODE_ENV = "production",
                sameSite: "strict",
                maxAge: 24 * 60 * 60 * 100,
            });
            //retorna o token
            const resposta= {
                usuario:{
                    id: usuario.id,
                    email: usuario.email,
                    papel: usuario.papel,                
                },
                token,
            };

            res.status(201).json({message: "Usuário criado"},resposta)
            //ERRO
        }catch(error){
            console.error("DEBUG: ERRO AO REGISTRAR", error);
            res.status(500).json({error: "Erro interno do servidor"})
        }
    },

    //LOGIN-----------------------------------------------------------------
    async login(req, res){
        try{
            const {email, senha} = req.body;
            if(!email, !senha){
                return res.status(400).json({error: "Email e senha devem ser colocados! "});
            };

            //pega email do usuario, ele existe
            const usuario = await prisma.usuario.findUnique({
                where: {email},
            });
            //se ele não existe (deve ser colocada a mesma msg de credenciais inválidas)
            if(!usuario){
                return res.status(400).json({error: "Email e senha devem ser colocados! "})
            }
            //pega a senha do usuario, ele existe
            const SenhaCerta = await bcrypt.compare(senha, usuario.senha);
            //se a senha for errada (deve ser colocada a mesma msg de credenciais inválidas)
            if(!SenhaCerta){
                return res.status(400).json({error: "Email e senha devem ser colocados! "});
            }

            //gera token para mandar pro front
            const token = jwt.sign(
                {
                    usuarioID: usuario.id,
                    email: usuario.email,
                    papel: usuario.papel,
                },
                process.env.JWT_SECRET,
                {expiresIn: "24h"}
            );

            //configura cookie 
            res.cookie("authToken", token,{
                httpOnly: true,
                secure: process.env.NODE_ENV ===  "production",
                sameSite: "strict",
                maxAge: 24*60*60*100,
            });

            const resposta ={
                usuario:{
                    id: usuario.id,
                    email: usuario.email,
                    papel: usuario.papel,                
                },
                token,
            };
            res.status(201).json({message:"Logado com sucesso"},resposta)
        }catch(error){
            console.error("DEBUG: ERRO AO REGISTRAR", error);
            res.status(500).json({error: "Erro interno do servidor"})
        }
    },

    //PROCURAR USUARIO --------------------------------------------------------------
    async eu(req, res){
        res.status(200).json({usuario: req.usuario});
    },


    //SAIR --------------------------------------------------------
    //não é async porque sai independente 
    logout(req, res){
        res.clearCookie("authToken");
        res.status(200).json({massage: "Logout realizado!"});
    }
}

export default AuthController;