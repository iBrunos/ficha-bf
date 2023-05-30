import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import Ficha from 'Ficha.js';
import Toggles from 'Toggles.js';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  avatar: {
    type: Buffer,
  },
  sheet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ficha',
  },
});

UserSchema.post('save', async function (doc) {
  const stock = new Ficha({
    sheet: doc._id,
    username: 'teste',
    age: 0,
    level: 0,
    race: '',
    size: '',
    alignment: '',
    xp: 0,
    hp: 0,
    hpTotal: 0,
    characterClass: '',
    forca: 0,
    espirito: 0,
    constituicao: 0,
    kai: 0,
    inteligencia: 0,
    carisma: 0,
    sabedoria: 0,
    destreza: 0,
    proficiencia: 0,
    toggles: null, // Remova o valor "647514a67e33d35435841df5"
  });

  const savedStock = await stock.save();

  const toggle = new Toggles({
    toggleSeducao: 0,
    toggleIntimidar: 0,
    togglePersuadir: 0,
    toggleResistencia: 0,
    toggleEstamina: 0,
    toggleAcrobacia: 0,
    toggleFurtividade: 0,
    togglePontaria: 0,
    togglePrestidigitacao: 0,
    toggleReligiao: 0,
    toggleDeterminacao: 0,
    toggleAtletismo: 0,
    toggleDominacao: 0,
    toggleInvestigacao: 0,
    toggleHistoria: 0,
    toggleAprender: 0,
    toggleMisticismo: 0,
    toggleDetectarAlma: 0,
    toggleControleChi: 0,
    toggleArmaduraEspiritual: 0,
    toggleMedicina: 0,
    toggleSobrevivencia: 0,
    togglePerspicacia: 0,
    togglePercepcao: 0,
    sheet: savedStock._id, // Vincule o Toggle à ficha salva
  });

  await toggle.save();
});
const User = mongoose.model('User', UserSchema);

// Verifica se o usuário admin já existe
User.findOne({ username: 'admin' })
  .then((existingUser) => {
    if (existingUser) {
      console.log('Usuário admin já existe');
    } else {
      // Cria o usuário admin
      const adminUser = new User({
        username: 'admin',
        lastname: 'admin',
        password: 'admin',
        email: 'admin@gmail.com',
        phone: '(71) 98799-8888',
        avatar: '',
      });

      // Salva o usuário no banco de dados
      adminUser
        .save()
        .then(() => {
          console.log('Usuário admin criado com sucesso');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  })
  .catch((err) => {
    console.log(err);
  });

export default User;
