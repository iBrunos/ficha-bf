import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SheetSchema = new mongoose.Schema({
    username: {
        type: String,
        unique,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    level: {
        type: Number,
        required: true,
    },
    race: {
        type: String,
        required: true,
        lowercase: true
    },
    size: {
        type: String,
        required: true,
    },
    alignment: {
        type: String,
        required: true,
    },
    xp: {
        type: Number,
        required: true,
    },
    hp: {
        type: Number,
        required: true,
    },
    hpTotal: {
        type: Number,
        required: true,
    },
    characterClass: {
        type: String,
        required: true,
    },
    forca: {
        type: Number,
        required: true,
    }, 
    espirito: {
        type: Number,
        required: true,
    }, 
    constituicao: {
        type: Number,
        required: true,
    }, 
    kai: {
        type: Number,
        required: true,
    }, 
    inteligencia: {
        type: Number,
        required: true,
    }, 
    carisma: {
        type: Number,
        required: true,
    },
    sabedoria: {
        type: Number,
        required: true,
    },
    destreza: {
        type: Number,
        required: true,
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