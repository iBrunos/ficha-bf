import userService from "../services/user.service.js";

const createService = async (req, res) => {
  try {
    const { username, lastname, password, confirmPassword, email, phone } = req.body;

    // Verificando se todos os campos foram enviados
    if (!username || !lastname || !password || !confirmPassword || !email || !phone) {
      return res.status(400).send({
        message: "Submit all fields for registration",
      });
    }
    
    // Obtendo o buffer da imagem
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
        avatar,
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

    // Verifica se um arquivo de imagem foi enviado
    if (!req.file) {
      return res.status(400).send({ message: "Nenhuma imagem enviada" });
    }

    const avatar = req.file ? req.file.buffer : null;

    // Atualiza o usuário com o novo avatar
    await userService.updateService(_id, avatar);
 
    res.send({
      message: "Usuário atualizado com sucesso",
      _id,
      avatar
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
};

export default { createService, findAll, findById, update, deleteUser };