import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SheetSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
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
    proficiencia: {
        type: Number,
        required: true,
    },

});


SheetSchema.pre("findOneAndUpdate", async function (next) {
    this._update.password = await bcrypt.hash(this._update.password, 10);
    next();
});


const Ficha = mongoose.model("Ficha", SheetSchema);


Ficha.findOne({ username: "teste" })
  .then((existingUser) => {
    if (existingUser) {
    } else {
      // Cria o usuário admin
      const testeUser = new Ficha({
        username: 'teste',
        age: 0,
        level: 0,
        race: 'Humano',
        size: 'Pequeno',
        alignment: 'Neutro (N)',
        xp: 0,
        hp: 50,
        hpTotal: 0,
        characterClass: 'Bruxo',
        forca: 14,
        espirito: 15,
        constituicao: 16,
        kai: 17,
        inteligencia: 18,
        carisma: 19,
        sabedoria: 20,
        destreza: 20,
        proficiencia: 3
      });

      // Salva o usuário no banco de dados
      testeUser.save()
        .then(() => {
        })
        .catch((err) => {
          console.log(err);
        });
    }
  })
  .catch((err) => {
    console.log(err);
  });


export default Ficha;