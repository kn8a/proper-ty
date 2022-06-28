var mongoose = require('mongoose')

var Schema = mongoose.Schema

var listingSchema = new Schema(
    {
        address: {
            street: {type: String, required: true, maxLength: 100},
            city: {type: String, required: true, maxLength: 100},
            state: {type: String, required: true, maxLength: 2},
            zip: {type: String, required: true, maxLength: 2}
            },
        image: {type: String},
        current_status: {type: String, required: true, enum: ['Active', 'Pending', 'Sold', 'Cancelled'], default: 'Active'},
        price: {type: Number, required: true},
        original_price: {type: Number},
        list_date: {type: Date},
        pending_date: {type: Date},
        sold_date: {type: Date},
        cancel_date: {type: Date},
        history: {type: Array},
        listing_company: {type: Schema.Types.ObjectId, ref: 'company'}
    }
)

//virtual for property url
listingSchema.virtual('url').get(function() {
    return '/listing' + this._id
})

module.exports = mongoose.model('listing', listingSchema)