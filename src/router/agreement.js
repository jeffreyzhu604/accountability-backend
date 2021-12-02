const express = require("express");
const Agreement = require("../models/Agreement");
const router = express.Router();

router.post("/create-agreement", async (req, res) => {
    try {
        const agreement = new Agreement(req.body);
        await agreement.save();
        res.status(200).send(agreement);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/agreement", async (req, res) => {
    try {
        const agreements = await Agreement.find({});
        if (!agreements) {
            return res.status(401).send({error: "Unable to fetch agreements"});
        }
        res.status(200).json(agreements);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.put("/edit-agreement", async (req, res) => {
    try {

    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete("/delete-agreement", async (req, res) => {
    try {

    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;