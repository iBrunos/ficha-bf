import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SheetSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
    },
    avatar: {
        type: Buffer,
    },
});
SheetSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

SheetSchema.pre("findOneAndUpdate", async function (next) {
  this._update.password = await bcrypt.hash(this._update.password, 10);
  next();
});


const Ficha = mongoose.model("Ficha", SheetSchema);


export default Ficha;