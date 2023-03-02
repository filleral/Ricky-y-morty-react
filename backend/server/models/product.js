import mongoose from 'mongoose';

const Characterschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    vivo: {
        type: Boolean,
        required: true,
        trim: true
    },
    urlImage: {
        url: String,
        public_id: String,
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    }
});

export default mongoose.model('Product', Characterschema);