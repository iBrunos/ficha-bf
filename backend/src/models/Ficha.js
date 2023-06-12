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
      toggleForca: {
        type: Boolean,
        required: true,
        default: false,
      },
      toggleEspirito: {
        type: Boolean,
        required: true,
        default: false,
      },
      toggleConstituicao: {
        type: Boolean,
        required: true,
        default: false,
      },
      toggleKai: {
        type: Boolean,
        required: true,
        default: false,
      },
      toggleInteligencia: {
        type: Boolean,
        required: true,
        default: false,
      },
      toggleCarisma: {
        type: Boolean,
        required: true,
        default: false,
      },
      toggleSabedoria: {
        type: Boolean,
        required: true,
        default: false,
      },
      toggleDestreza: {
        type: Boolean,
        required: true,
        default: false,
      },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Ficha = mongoose.model("Ficha", SheetSchema);

export default Ficha;