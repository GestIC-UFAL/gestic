const { ClassTimetableService } = require("../services");
const timetableService = new ClassTimetableService();
const verifyJWT = require("../config/configJWT");
const express = require("express");

const router = express.Router();

router.post("/", verifyJWT, async (req, res) => {
  try {
    const result = await timetableService.insert({
      ...req.body,
      token: req.token,
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    err.code
      ? res.status(500).json({ message: "Server Internal Error." })
      : res.status(500).json({ message: err.message });
  }
});

router.put("/", verifyJWT, async (req, res) => {
  try {
    const result = await timetableService.update({
      ...req.body,
      token: req.token,
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    err.code
      ? res.status(500).json({ message: "Server Internal Error." })
      : res.status(500).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await timetableService.getAll();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    err.code
      ? res.status(500).json({ message: "Server Internal Error." })
      : res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await timetableService.getById({
      ...req.params,
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    err.code
      ? res.status(500).json({ message: "Server Internal Error." })
      : res.status(500).json({ message: err.message });
  }
});

router.delete("/", verifyJWT, async (req, res) => {
  try {
    const result = await timetableService.deleteAll(req.token);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    err.code
      ? res.status(500).json({ message: "Server Internal Error." })
      : res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", verifyJWT, async (req, res) => {
  try {
    const result = await timetableService.delete({
      ...req.params,
      token: req.token,
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    err.code
      ? res.status(500).json({ message: "Server Internal Error." })
      : res.status(500).json({ message: err.message });
  }
});

module.exports = router;
