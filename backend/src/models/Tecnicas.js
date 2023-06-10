import mongoose from 'mongoose';

const TecnicasSchema = new mongoose.Schema({
  titulo: {
    type: String,

  },
  descricao: {
    type: String,
  },
});

const Tecnica = mongoose.model("Tecnicas", TecnicasSchema);
export default Tecnica;