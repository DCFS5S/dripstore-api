const express = require('express');
const { User, Order, Product } = require('../models');

const router = express.Router();

const show = async (request, response) => {
    const order = await Order.findOne({
        where: { id: request.params.orderId },
        include: ['products', 'user']
    });   

    response.json({ order })
};

const addProduct = async (request, response) => {
    const { orderId } = request.params
    const { productId } = request.body

    const order = orderId
        ? await Order.findByPk(orderId, { include: 'products' })
        : await Order.create({ status: 'draft' });

    const [ product ] = await order.getProducts({ where: { id: productId }});

    const newAmount = product
        ? product['ProductOrders'].amount + 1
        : 1; 

    const result = await order.addProduct(productId, {
        through: {
            amount: newAmount,
        }
    })

    response.json({ result })
};

const removeProduct = async (request, response) => {
    const { orderId } = request.params
    const { productId } = request.body

    const order = await Order.findByPk(orderId);

    const [ product ] = await order.getProducts({ where: { id: productId }});

    const newAmount = product['ProductOrders'].amount - 1

    if (newAmount === 0) {
        await order.removeProduct(productId);
    } else {
        await order.addProduct(productId, {
            through: {
                amount: newAmount,
            }
        })
    }

    response.json({ order })
};


module.exports = {
    show,
    addProduct,
    removeProduct,
};
