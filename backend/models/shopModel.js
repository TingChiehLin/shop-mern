const mongoose = require('mongoose')

const shopListSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a value on the name field"]
        }
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model('ShopList', shopListSchema);
