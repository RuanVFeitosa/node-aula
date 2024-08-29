const Client = require("../models/Client");

const ProductController = {
  create: async (req, res) => {
    try {
      const { nome,  idade , cpf, email, senha } = req.body;
      const product = await Product.create({
        nome: nome,
        idade: idade,
        cpf: cpf,
        email: email,
        senha: email,
      });

      res.status(200).json({
        msg: "Cliente Criado com Sucesso",
        produto: product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const cliente = await Client.findAll();
      res.status(200).json({
        msg: "Clientes Encontrados !",
        clientes: cliente,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;

      const cliente = await Client.findByPk(id);

      res.status(200).json({
        msg: "Cliente Encontrado",
        cliente,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, idade, cpf, email, senha } = req.body;
      if (!(await Client.findByPk(id))) {
        res.status(500).json({
          msg: "Cliente não encontrado",
        });
      } else {
        Client.update(
          {
            nome: nome,
            idade: idade,
            cpf: cpf,
            email: email,
            senha: senha,
          },
          {
            where: { id: id },
          }
        );
        res.status(200).json({
          msg: "Clente atualizado",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const cliente = await Client.findByPk(id);
      if (!cliente) {
        res.status(500).json({
          msg: "Cliente não encontrado",
        });
      } else {
        cliente.destroy();
        res.status(200).json({
          msg: "Cliente Deletado",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
};

module.exports = ProductController;