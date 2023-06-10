import fichaService from '../services/sheet.service.js';
import Ficha from "../models/Ficha.js";

const createService = async (req, res) => {
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
      togglePercepcao,
      toggleForca,
      toggleEspirito,
      toggleConstituicao,
      toggleKai,
      toggleInteligecnia,
      toggleCarisma,
      toggleSabedoria,
      toggleDestreza
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
      proficiencia,
      togglePercepcao,
      toggleForca,
      toggleEspirito,
      toggleConstituicao,
      toggleKai,
      toggleInteligecnia,
      toggleCarisma,
      toggleSabedoria,
      toggleDestreza
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
const findFichaByUserId = async (userId) => {
  try {
    const ficha = await Ficha.findOne({ userId }); // Procura uma ficha com o userId fornecido
    return ficha;
  } catch (error) {
    throw new Error("Erro ao buscar a ficha por userId.");
  }
};
const getFichaById = async (req, res) => {
  try {
    const userId = req.params.userId; // Obter o UserId dos parâmetros da rota
    const fichas = await fichaService.findAllService(userId); // Passar o UserId como parâmetro para o serviço

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
const updateFicha = async (req, res) => {
  try {
    const {
      userId,
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
      proficiencia,
      togglePercepcao,
      toggleForca,
      toggleEspirito,
      toggleConstituicao,
      toggleKai,
      toggleInteligecnia,
      toggleCarisma,
      toggleSabedoria,
      toggleDestreza
    } = req.body;

    // Encontre a ficha correspondente com base no userId
    const ficha = await fichaService.findFichaByUserId(userId);

    if (!ficha) {
      return res.status(404).send({
        message: 'Ficha não encontrada.',
      });
    }

    // Atualize os campos da ficha com os dados fornecidos
    ficha.username = username;
    ficha.age = age;
    ficha.level = level;
    ficha.race = race;
    ficha.size = size;
    ficha.alignment = alignment;
    ficha.xp = xp;
    ficha.hp = hp;
    ficha.hpTotal = hpTotal;
    ficha.characterClass = characterClass;
    ficha.forca = forca;
    ficha.espirito = espirito;
    ficha.constituicao = constituicao;
    ficha.kai = kai;
    ficha.inteligencia = inteligencia;
    ficha.carisma = carisma;
    ficha.sabedoria = sabedoria;
    ficha.destreza = destreza;
    ficha.proficiencia = proficiencia;
    ficha.togglePercepcao = togglePercepcao;
    ficha.toggleForca = toggleForca;
    ficha.toggleEspirito = toggleEspirito;
    ficha.toggleConstituicao = toggleConstituicao;
    ficha.toggleKai = toggleKai;
    ficha.toggleInteligecnia = toggleInteligecnia;
    ficha.toggleCarisma = toggleCarisma;
    ficha.toggleSabedoria = toggleSabedoria;
    ficha.toggleDestreza = toggleDestreza;

    // Salve as alterações da ficha usando o serviço fichaService
    const updatedFicha = await fichaService.updateService(userId, ficha);

    res.send({
      message: 'Ficha atualizada com sucesso.',
      updatedFicha,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
};

export default {
  createService,
  getAllFichas,
  getFichaById,
  updateFicha,
  deleteFicha,
  findFichaByUserId
};