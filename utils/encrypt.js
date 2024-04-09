// TODO: Encontrar uma forma correta de encriptar a senha
module.exports = (password) => password.split('').reverse().join('');
