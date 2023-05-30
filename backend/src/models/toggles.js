import mongoose from 'mongoose';

const toggleSchema = new mongoose.Schema({
  toggleSeducao: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleIntimidar: {
    type: Boolean,
    required: true,
    default: false,
  },
  togglePersuadir: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleResistencia: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleEstamina: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleAcrobacia: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleFurtividade: {
    type: Boolean,
    required: true,
    default: false,
  },
  togglePontaria: {
    type: Boolean,
    required: true,
    default: false,
  },
  togglePrestidigitacao: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleReligiao: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleDeterminacao: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleAtletismo: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleDominacao: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleInvestigacao: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleHistoria: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleAprender: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleMisticismo: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleDetectarAlma: {
    type: Boolean,
    required: true,
    default: false,
  },

  toggleControleChi: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleArmaduraEspiritual: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleMedicina: {
    type: Boolean,
    required: true,
    default: false,
  },
  toggleSobrevivencia: {
    type: Boolean,
    required: true,
    default: false,
  },
  togglePespicacia: {
    type: Boolean,
    required: true,
    default: false,
  },
  togglePercepcao: {
    type: Boolean,
    required: true,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
},

  });

const Toggles = mongoose.model("Toggles", toggleSchema);


export default Toggles;