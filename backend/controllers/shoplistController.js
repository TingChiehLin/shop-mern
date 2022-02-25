const asyncHandler = require('express-async-handler')

const Shop = require('../models/shopModel')

const getShoplist = asyncHandler(async (req, res) => {
    const shops = await Shop.find()

    //res.status(200).json({message: "GET ShopList Items"})
    res.status(200).json(shops)
})

const setShopItem = asyncHandler(async (req,res) => {

    if (!req.body.name) {
        res.status(400).json({message: 'Not Found Error'})
        throw new Error('Please add a textfield')
    }

    const item = await Shop.create({
        name: req.body.name
    })

    res.status(200).json(item)
    // res.status(200).json({message: "Put Successfully"})
})

const updateShopItem = asyncHandler(async (req, res) => {
    const item = await Shop.findById(req.params.id)

    if (!item) {
        res.status(400)
        throw new Error('Item not found')
    }

    const updatedItem = await Shop.findByIdAndUpdate(req.parms.id, req.body, {
        new: true
    })

    res.status(200).json(updatedItem)
    // res.status(200).json({message: `Update item ${req.params.id}`})
})

const deleteShopItem = asyncHandler(async (req, res) => {
    const item = await Shop.findById(req.params.id)

    if (!item) {
        res.status(400)
        throw new Error('Item not found')
    }

    await item.remove()

    // res.status(200).json({message: `Delete item ${req.params.id}`})
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getShoplist,
    setShopItem,
    updateShopItem,
    deleteShopItem
}

