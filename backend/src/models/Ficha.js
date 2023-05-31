import mongoose from 'mongoose';

const SheetSchema = new mongoose.Schema({
    username: {
        type: String,

    },
    age: {
        type: Number
    },
    level: {
        type: Number
    },
    race: {
        type: String
    },
    size: {
        type: String
         
    },
    alignment: {
        type: String
    },
    xp: {
        type: Number
    },
    hp: {
        type: Number
    },
    hpTotal: {
        type: Number
    },
    characterClass: {
        type: String
    },
    forca: {
        type: Number
    },
    espirito: {
        type: Number
    },
    constituicao: {
        type: Number
    },
    kai: {
        type: Number
    },
    inteligencia: {
        type: Number
    },
    carisma: {
        type: Number
    },
    sabedoria: {
        type: Number
    },
    destreza: {
        type: Number
    },
    proficiencia: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});


const Ficha = mongoose.model("Ficha", SheetSchema);


export default Ficha;