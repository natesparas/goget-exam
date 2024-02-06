const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger options
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User Settings API',
            version: '1.0.0',
            description: 'API for managing user settings',
        },
    },
    apis: ['./src/routes/*.js'], // Path to the API routes files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = (app) => {
    app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}