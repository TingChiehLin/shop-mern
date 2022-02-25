const express = require('express')
const router = express.Router()
const {
    getShoplist,
    setShopItem,
    updateShopItem,
    deleteShopItem
} = require('../controllers/shoplistController')

router.route('/').get(getShoplist).post(setShopItem)
router.route('/:id').put(updateShopItem).delete(deleteShopItem)

// router.get('/', getShoplist)
// router.post('/', setShopItem)

// router.put('/:id', updateShopItem)
// router.delete('/:id', deleteShopItem)

module.exports = router


