const { ComplementaryService } = require('../services');
const complementaryService = new ComplementaryService();
const verifyJWT = require('../config/configJWT');
const express = require('express');

const router = express.Router();

router.put('/', verifyJWT, async (req, res) => {
    try {
        const result = await userService.update({
            ...req.body, token: req.token, idInToken: req.userId});
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        (err.code) ?
            res.status(500).json({ message: "Server Internal Error." }) :
            res.status(500).json({ message: err.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const result = await complementaryService.getAll({});
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        (err.code) ?
            res.status(500).json({ message: "Server Internal Error." }) :
            res.status(500).json({ message: err.message });
    }
})

router.get('/:id?', verifyJWT, async (req, res) => {
    try {
        const result = await userService.getById({
            ...req.params, token: req.token, idInToken: req.userId });
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        (err.code) ?
            res.status(500).json({ message: "Server Internal Error." }) :
            res.status(500).json({ message: err.message });
    }
})

router.delete('/:id', verifyJWT, async (req, res) => {
    try {
        const result = await userService.deleteById({
            ...req.params, token: req.token });
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        (err.code) ?
            res.status(500).json({ message: "Server Internal Error." }) :
            res.status(500).json({ message: err.message });
    }
})

module.exports = router;
