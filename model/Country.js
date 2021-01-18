import mongoose from 'mongoose';

const country = new mongoose.Schema({
    country_name: String,
    country_code: String,
    region: Array
});


export default mongoose.model('Country',country);