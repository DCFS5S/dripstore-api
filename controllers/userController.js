const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { User } = require('../models');
const { userSchema } = require('../validations/newUserValidation');

const create = async (request, response) => {
  const {
    name,
    cpf,
    email,
    password,
    phone,
    address,
    neighborhood,
    city,
    zip,
    addressComplement,
  } = request.body;

  try {
    const userData = {
      name, cpf, email, password, phone, address, neighborhood, city, zip, addressComplement,
    };
    const { error } = userSchema.validate(userData);
    if (error) {
      return response.status(400).json({ error: error.details[0].message });
    }

    const existingUser = await User.findOne({ where: { [Op.or]: [{ email }, { cpf }] } });
    if (existingUser) {
      return response.status(400).json({ error: 'Usuário já cadastrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      cpf,
      email,
      password: hashedPassword,
      phone,
      address,
      neighborhood,
      city,
      zip,
      addressComplement,
    });

    return response.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    return response.status(500).json({ message: 'Erro interno do servidor', error });
  }
};

module.exports = {
  create,
};
