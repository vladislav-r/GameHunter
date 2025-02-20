import mongoose from 'mongoose';
import {FLOAT} from "sequelize";

const FavouritesSchema = new mongoose.Schema({
userId: {
    type: String,
    required: true,
},
name: {
    type: String,
    required: true,
},
price: FLOAT,
discount: FLOAT,
});

export default mongoose.model('Favourites', FavouritesSchema);