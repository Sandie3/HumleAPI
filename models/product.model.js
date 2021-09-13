const mg = require( 'mongoose' );

const productScheme = new mg.Schema( {
    title: {
        type: String,
        required: [ true, 'No title!' ]
    },
    content: {
        type: String,
        requires: [ true, 'No content!' ]
    },
    price: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        requires: [ true, 'No image!' ]
    }
} )

module.exports = mg.model( 'Product', productScheme, 'product' );