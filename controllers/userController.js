const { getDBConnection } = require("../utils/getDBConnection");
const User = require("../models/User");


const create = async (request, response) => {
    const {
        name,
        cpf,
        email,
        password,
        cel,
        address,
        neighborhood,
        city,
        zip,
        address_complement,
        registration_date = [] } = request.body;
    
    User.createOne({
        name,
        cpf,
        email,
        password,
        cel,
        address,
        neighborhood,
        city,
        zip,
        address_complement,
        registration_date 
    })
    
    response.status(201);
    response.json();
  }

module.exports = {
    create
};