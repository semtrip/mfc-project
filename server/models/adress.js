import mongoose from "mongoose";

const AdressSchema = new mongoose.Schema(
    {   
        key: {
            type: String,
            required: true,
            unique: true
        }
    }
)
export default mongoose.model('AdressSchema', AdressSchema)