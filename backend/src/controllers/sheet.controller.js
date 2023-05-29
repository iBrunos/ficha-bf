import fichaService from '../services/fichaService.js';

const createFicha = async (req, res) => {
  try {
    const {
      username,
      age,
      level,
      race,
      size,
      alignment,
      xp,
      hp,
      hpTotal,
      characterClass,
      forca,
      espirito,
      constituicao,
      kai,
      inteligencia,
      carisma,
      sabedoria,
      destreza,
    } = req.body;

    // Verificar se todos os campos foram enviados
    if (
      !username ||
      !age ||
      !level ||
      !race ||
      !size ||
      !alignment ||
      !xp ||
      !hp ||
      !hpTotal ||
      !characterClass ||
      !forca ||
      !espirito ||
      !constituicao ||
      !kai ||
      !inteligencia ||
      !carisma ||
      !sabedoria ||
      !destreza
    ) {
      return res.status(400).send({
        message: 'Preencha todos os campos para o registro.',
      });
    }

    const createFicha = await fichaService.createService({
      username,
      age,
      level,
      race,
      size,
      alignment,
      xp,
      hp,
      hpTotal,
      characterClass,
      forca,
      espirito,
      constituicao,
      kai,
      inteligencia,
      carisma,
      sabedoria,
      destreza,
    });

    if (!createFicha) {
      return res.status(400).send({
        message: 'Erro ao criar a Ficha.',
      });
    }

    res.status(201).send({
      message: 'Ficha criada com sucesso.',
      ficha: createFicha,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteFicha = async (req, res) => {
  const { id } = req.params;

  try {
    await fichaService.deleteService(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllFichas = async (req, res) => {
  try {
    const fichas = await fichaService.findAllService();

    if (fichas.length === 0) {
      return res.status(400).send({
        message: 'Não há fichas cadastradas.',
      });
    }

    res.send(fichas);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getFichaById = async (req, res) => {
  try {
    const { id } = req.params;
    const ficha = await fichaService.findByIdService(id);

    if (!ficha) {
      return res.status(404).send({ message: 'Ficha não encontrada.' });
    }

    res.send(ficha);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const updateFicha = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      username,
      age,
      level,
      race,
      size,
      alignment,
      xp,
      hp,
      hpTotal,
      characterClass,
      forca,
      espirito,
      constituicao,
      kai,
      inteligencia,
      carisma,
      sabedoria,
      destreza,
    } = req.body;

    const updates = {
      username,
      age,
      level,
      race,
      size,
      alignment,
      xp,
      hp,
      hpTotal,
      characterClass,
      forca,
      espirito,
      constituicao,
      kai,
      inteligencia,
      carisma,
      sabedoria,
      destreza,
    };

    await fichaService.updateService(id, updates);

    res.send({
      message: 'Ficha atualizada com sucesso.',
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
};

export default {
  createFicha,
  getAllFichas,
  getFichaById,
  updateFicha,
  deleteFicha,
};
