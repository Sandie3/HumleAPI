const mg = require('mongoose');

const aboutScheme = new mg.Schema({
    title: {
        type: String,
        required: [true, 'No title!']
    },
    content: {
        type: String,
        requires: [true, 'No content!']
    }
})

module.exports = mg.model('About', aboutScheme, 'about');