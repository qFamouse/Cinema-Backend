const rolesService = require('../services/RolesService');

class RolesController {
    async GetAll(req, res) {
        res.send(await rolesService.GetAll());
    }
    async GetById(req, res) {
        res.send(await rolesService.GetById(req.params.id));
    }
    async CreateOne(req, res) {
        let role = {
            name: req.body.name
        };

        res.send(await rolesService.CreateOne(role));
    }

    async EditById(req, res) {
        let role = {
            name: req.body.name
        };

        res.send(await rolesService.EditById(req.params.id, role));
    }

    async DeleteById(req, res) {
        await rolesService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new RolesController();