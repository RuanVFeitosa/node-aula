const validateClient = (req, res, next) => {
    const { nome, email, senha } = req.body

    // Preenchida / não preenchida
    if (!nome || !email || !senha) {
        return res.status(400).json({
            msg: "Campos invalidos, tente novamente"
        })
    }


    // Pode avançar
    return next();
};

const validateClientId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            msg: "Parametro faltando"
        });
    }

    return next();
}

module.exports = { validateClient, validateClientId}
