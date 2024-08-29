const { Router } = require("express");
const { validateClient, validateClientId } = require("../middleware/ValidateClient");

const router = Router();

router.post("/", validateClient, (req, res) => {
    ClientController.create(req, res);
});

router.get("/", (req, res) => {
    ClientController.getAll(req, res);
});

router.get("/:id", validateClientId, (req, res) => {
    ClientController.getOne(req, res);
});

router.put("/:id",validateClient, validateClientId, (req, res) => {
    ClientController.update(req, res);
});

router.delete("/:id", validateClientId, (req, res) => {
    ClientController.delete(req, res);
});
module.exports = router;