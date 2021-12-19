const countryService = require('../services/CountryService');

class CountryController {
    async GetAll(req, res) {
        res.send(await countryService.GetAll());
    }
    async GetById(req, res) {
        res.send(await countryService.GetById(req.params.id));
    }
    async Create(req, res) {
        let country = {
            name: req.body.name
        };

        res.send(await countryService.CreateOne(country));
    }

    async EditById(req, res) {
        let country = {
            name: req.body.name
        };

        res.send(await countryService.EditById(req.params.id, country));
    }

    async DeleteById(req, res) {
        await countryService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new CountryController();