const countriesService = require('../services/CountriesService');

class CountriesController {
    async GetAll(req, res) {
        res.send(await countriesService.GetAll());
    }
    async GetById(req, res) {
        res.send(await countriesService.GetById(req.params.id));
    }
    async CreateOne(req, res) {
        let country = {
            name: req.body.name
        };

        res.send(await countriesService.CreateOne(country));
    }

    async EditById(req, res) {
        let country = {
            name: req.body.name
        };

        res.send(await countriesService.EditById(req.params.id, country));
    }

    async DeleteById(req, res) {
        await countriesService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new CountriesController();