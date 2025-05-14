// Importando a classe 'DataTypes' do Sequelize para definir os tipos de dados
import { DataTypes } from 'sequelize';

// Exportando uma função que define o modelo Admin
export default (sequelize) => {
  // Definindo o modelo Admin com os atributos nome, email e senha
  const Admin = sequelize.define("Admin", {
    nome: {
      type: DataTypes.STRING,  // Definindo o tipo de dado como STRING para o nome
      allowNull: false  // O campo nome não pode ser nulo
    },
    email: {
      type: DataTypes.STRING,  // Definindo o tipo de dado como STRING para o email
      allowNull: false,  // O campo email não pode ser nulo
      unique: true,  // O email precisa ser único
      validate: {
        isEmail: true  // Validando que o campo email contém um formato de email válido
      }
    },
    senha: {
      type: DataTypes.STRING,  // Definindo o tipo de dado como STRING para a senha
      allowNull: false  // O campo senha não pode ser nulo
    }
  });

  return Admin;  // Retorna o modelo Admin para ser utilizado em outras partes do código
};
