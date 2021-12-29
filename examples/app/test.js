/* istanbul ignore file */
/* eslint import/no-extraneous-dependencies: 0 */

// Dependencies
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('../..');
// const router = express.Router();//引入路由函数

const app = express();
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'xxxx',
    version: '1.0.0',
    description: 'API',
  },
  basePath: '/', // Base path (optional)
};
const options = {
  swaggerDefinition,
  apis: ['./examples/app/routes*.js', './examples/app/parameters.yaml'],
};

// router.get('/swagger.json', async function (ctx) {
//   ctx.set('Content-Type', 'application/json');
//   ctx.body = swaggerSpec;
// })
const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const PORT = 9000;
const server = app.listen(PORT, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('Example app listening at http://%s:%s', host, port);
});
module.exports = { app, server };
