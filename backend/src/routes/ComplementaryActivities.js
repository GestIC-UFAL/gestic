const { ComplementaryService } = require('../services');
const complementaryService = new ComplementaryService();
const verifyJWT = require('../config/configJWT');
const express = require('express');

const router = express.Router();

router.post('/',verifyJWT, async (req, res) => {
    try {
        const result = await complementaryService.insert({
            ...req.body, token: req.token,});
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

router.delete('/:id', verifyJWT, async (req, res) => {
    try {
        const result = await complementaryService.deleteActivity({
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
