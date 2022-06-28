var mongoose = require('mongoose')

var Schema = mongoose.Schema

var companySchema = new Schema(
    {
    company: {type: String, required: true, maxLength: 100},
    phone: {type: String, required: true, maxLength: 12},
    img: {type: String},
    email: {type: String},
    license: {type: String}
    }
)

//virtual for property url
companySchema
.virtual('url').get(function() {
    return '/company' + this._id
})

module.exports = mongoose.model('company', companySchema)