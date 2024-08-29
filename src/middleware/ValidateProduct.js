// 

const validateProduct = (req, res, next) => {
    const { nome, email, quantidade, categoria, descricao } = req.body

    // Preenchida / não preenchida
    if (!nome || !email || !quantidade || !categoria || !descricao) {
        return res.status(400).json({
            msg: "Campos invalidos, tente novamente"
        })
    }


    // Pode avançar
    return next();
};

const validateProductId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            msg: "Parametro faltando"
        });
    }

    return next();
}

module.exports = { validateProduct, validateProductId}



