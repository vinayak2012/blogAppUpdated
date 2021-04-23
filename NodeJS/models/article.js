const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title:{
        type: String
    },
    categories:{
        type: String
    },
    description:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },

})


module.exports = mongoose.model('Article', articleSchema);