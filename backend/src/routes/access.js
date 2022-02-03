const { UserService } = require("../services");
const userService = new UserService();
const verifyJWT = require("../config/configJWT");
const express = require("express");
const multer = require("multer");
const db = require("../database/models");
let fs = require("fs-extra");

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            let type = req.params.type;
            let path = `../frontend/src/uploads/users`;
            fs.mkdirsSync(path);
            callback(null, path);
        },
        filename: (req, file, callback) => {
            //originalname is the uploaded file's name with extn
            callback(null, file.originalname);
        },
    }),

    //dest: '../../../frontend/uploads',
});

const router = express.Router();

router.post("/login", async (req, res, next) => {
    try {
        const result = await userService.login(req.body);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        err.code
            ? res.status(500).json({ message: "Server Internal Error." })
            : res.status(500).json({ message: err.message });
    }
});

router.post("/register", async (req, res) => {
    try {
        const result = await userService.register({ ...req.body });
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        err.code
            ? res.status(500).json({ message: "Server Internal Error." })
            : res.status(500).json({ message: err.message });
    }
});

router.post("/register/file", upload.single("file"), async (req, res) => {
    if (req.file) {
        try {
            await db.user.update(
                {
                    image_id: "../../uploads/users/" + req.file.filename,
                },
                {
                    where: {
                        user_id: req.body.user_id,
                    },
                }
            );

            res.send({
                upload: true,
                files: req.file,
            }).status(200);
        } catch (err) {
            console.log(err);
            err.code
                ? res.status(500).json({ message: "Server Internal Error." })
                : res.status(500).json({ message: err.message });
        }
    } else {
        return res.status(200).json({
            message: "No file found",
        });
    }
});

router.get("/logout", verifyJWT, async (req, res) => {
    try {
        res.json({ auth: false, token: null });
        //        res.redirect('/');
    } catch (err) {
        console.log(err);
        err.code
            ? res.status(500).json({ message: "Server Internal Error." })
            : res.status(500).json({ message: err.message });
    }
});

module.exports = router;
