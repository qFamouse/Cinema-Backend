const express = require('express');
const usersService = require('../services/UsersService');
const UserConfig = require('../config/ModelsConfig.json');


class UsersController {
    async GetAll(req, res) {
        res.send(await usersService.GetAll());
    }
    async GetById(req, res) {
        res.send(await usersService.GetById(req.params.id))
    }
    async CreateOne(req, res) {
        let user = {
            login: req.body.login,
            password: req.body.password,
            roleId: req.body.roleId ?? UserConfig.Users.DefaultRole
        };

        let userInfo = {
            avatar: req.body.avatar ?? null,
            firstName: req.body.firstName,
            birthday: req.body.birthday,
            email: req.body.email,
            phone: req.body.phone ?? null
        };

        res.send(await usersService.CreateOne(user, userInfo))
    }

    async EditById(req, res) {
        let userId = req.params.id;

        let user = {
            login: req.body.login,
            password: req.body.password
        };

        let userInfo = {
            avatar: req.body.avatar,
            firstName: req.body.firstName,
            birthday: req.body.birthday,
            email: req.body.email,
            phone: req.body.phone
        };

        res.send(await usersService.EditById(userId, user, userInfo));
    }

    async DeleteById(req, res) {
        await usersService.DeleteById(req.params.id);
        res.send("Ok");
    }
}

module.exports = new UsersController();