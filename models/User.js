const { getDBConnection } = require("../utils/getDBConnection");

const User = {
    createOne: async (newUser) => {
        const connection = await getDBConnection();

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
            registration_date
        } = newUser

        const [results] = await connection.query(
            'INSERT INTO user (name, cpf, email, password, cel, address, neighborhood, city, zip, address_complement, registration_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [name, cpf, email, password, cel, address, neighborhood, city, zip, address_complement, registration_date]
        );

        return results.insertId
    },
}

module.exports = User;