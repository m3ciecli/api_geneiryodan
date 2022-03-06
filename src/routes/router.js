const router = require('express').Router();
const { getUserInformation } = require('../controllers/controller.js');

module.exports = (app, client) => {
    app.use('/users', router)

    router.get('/', (req, res) => res.json({ message: "Insira o id de um usuário. "}));

    router.get('/:id', (req, res) => getUserInformation(req, res, client));
}