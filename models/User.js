const { Model } = require('sequelize');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Aqui você pode definir associações com outros modelos, se necessário
    }

    static async createUser(data) {
      const newUser = await User.create(data);
      return newUser;
    }

    static async login(email, password) {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new Error('Usuário não encontrado');
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error('Credenciais inválidas');
      }

      const token = jwt.sign({ userId: user.id }, 'sua_chave_secreta', { expiresIn: '1h' });
      return token;
    }
  }

  User.init({
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    cel: DataTypes.STRING,
    address: DataTypes.STRING,
    neighbourhood: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.STRING,
    addressComplement: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};