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
});

const Toggles = mongoose.model("Toggles", toggleSchema);


const testeToggles = new Toggles ({

    toggleSeducao: 0,
    toggleIntimidar: 0,
    togglePersuadir: 1,
    toggleResistencia: 0,
    toggleEstamina: 1,
    toggleAcrobacia: 0,
    oggleFurtividade: 1,
    togglePontaria: 0,
    togglePrestidigitacao: 0,
    toggleReligiao: 1,
    toggleDeterminacao: 0,
    toggleAtletismo: 0,
    toggleDominacao: 1,
    toggleInvestigacao: 0,
    toggleHistoria: 0,
    toggleAprender: 0,
    toggleMisticismo: 1,
    toggleDetectarAlma: 1,
    toggleControleChi: 1,
    toggleArmaduraEspiritual: 0,
    toggleMedicina: 0,
    toggleSobrevivencia: 0,
    togglePespicacia: 0,
    togglePercepcao: 1
})


// Salva o toggles no banco de dados
testeToggles.save()
  .then(() => {
    console.log('Toggle salvo com sucesso.');
  })
  .catch((err) => {
    console.log(err);
  });

export default Toggles;