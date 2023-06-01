import userService from "../services/user.service.js";
import Ficha from "../models/Ficha.js";
import Toggles from "../models/Toggles.js";

const createService = async (req, res) => {
  try {
    const { username, lastname, password, confirmPassword, email, phone } = req.body;

    // Verificando se todos os campos foram enviados
    if (!username || !lastname || !password || !confirmPassword || !email || !phone) {
      return res.status(400).send({
        message: "Submit all fields for registration",
      });
    }
    const avatar = req.file ? req.file.buffer : null;
    const createUser = await userService.createService({
      username,
      lastname,
      password,
      confirmPassword,
      email,
      phone,
      avatar
    });

    if (!createUser) {
      return res.status(400).send({
        message: "Error creating User",
      });
    }

    // Cria a ficha vinculada ao usuário
    const ficha = new Ficha({
      user: createUser._id,
      username,
      age: 0,
      level: 0,
      race: 'Humano',
      size: 'Pequeno',
      alignment: 'Neutro (N)',
      xp: 0,
      hp: 0,
      hpTotal: 0,
      characterClass: 'Bruxo',
      forca: 0,
      espirito: 0,
      constituicao: 0,
      kai: 0,
      inteligencia: 0,
      carisma: 0,
      sabedoria: 0,
      destreza: 0,
      proficiencia: 0,
    });
    await ficha.save();

    // Cria os toggles vinculados ao usuário
    const toggle = new Toggles({
      user: createUser._id,
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
    });
    await toggle.save();

    res.status(201).send({
      message: "User created successfully",
      user: {
        id: createUser.id,
        username,
        lastname,
        password,
        confirmPassword,
        email,
        phone,
        avatar: '',
      },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await userService.deleteService(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await userService.findAllService();

    if (users.length === 0) {
      return res.status(400).send({
        message: "There are no registered users",
      });
    }
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userService.findByIdService(id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
const update = async (req, res) => {
  try {
    const _id = req.body._id;
    const avatar = req.file.path; // Obtém o caminho do arquivo enviado


    await userService.updateService(
      _id,
      avatar);

    res.send({
      message: "Usuário atualizado com sucesso",
      _id,
      avatar,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
};


export default { createService, findAll, findById, update, deleteUser };