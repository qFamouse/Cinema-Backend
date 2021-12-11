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
        }

        let userInfo = {
            avatar: req.body.avatar ?? null,
            firstName: req.body.firstName,
            birthday: req.body.birthday,
            email: req.body.email,
            phone: req.body.phone ?? null,
        }

        res.send(await usersService.CreateOne(user, userInfo))
    }
}

module.exports = new UsersController();