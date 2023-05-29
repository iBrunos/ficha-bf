import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
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

UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.pre('findOneAndUpdate', async function (next) {
  this._update.password = await bcrypt.hash(this._update.password, 10);
  next();
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
        password: 'admin',
        level: 'Gerente',
        email: 'admin@gmail.com',
        phone: '(71) 98799-8888',
        avatar: '',
        sheet: sheetId, // Substitua "sheetId" pelo ID da planilha existente
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
