const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    },
    ativo: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

ProductSchema.plugin(mongoosePaginate);
mongoose.model('Product', ProductSchema);