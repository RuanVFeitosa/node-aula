const { Router } = require("express");
const userRoutes = require ("./routerUser")
const productRoutes = require("./routerProduct")
const clienteRoutes = require("./routerClient")

const UserController = require("../controller/UserController")
const authenticateToken = require("../middleware/authenticateToken")
const uploadRoutes = require('./routerUploads')
const router = Router();

router.use('/image', uploadRoutes)

// protegidos
// /api/user/
router.use('/user', userRoutes);
router.use("/product", productRoutes)
router.use("/cliente", clienteRoutes)

// /api/login
router.post("/login",(req, res) => {
    UserController.login(req, res)
});

module.exports = router;