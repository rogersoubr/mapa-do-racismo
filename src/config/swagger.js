import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Mapa do Racismo API',
    version: '1.0.0',
    description: 'API para mapeamento e documentação de ocorrências de racismo no Brasil',
    license: {
      name: 'ISC',
      url: 'https://opensource.org/licenses/ISC',
    },
    contact: {
      name: 'Kelvisduank',
      url: 'https://github.com/Kelvisduank/mapa-do-racismo',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000/api',
      description: 'Servidor de desenvolvimento',
    },
    {
      url: 'https://mapa-do-racismo.onrender.com/api',
      description: 'Servidor de produção',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Caminhos para os arquivos que contêm anotações swagger
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  // Rota para a documentação Swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
  // Rota para o arquivo JSON do Swagger
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  
  console.log(`📚 Documentação Swagger disponível em http://localhost:${port}/api-docs`);
};

export default swaggerDocs;
