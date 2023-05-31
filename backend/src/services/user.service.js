import User from '../models/User.js';

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (id, username, password, level, email, phone, avatar) =>
  User.findOneAndUpdate(
    { _id: id },
    { username, password, level, email, phone, avatar },
    { new: true } // Define {new: true} para retornar o documento atualizado após a atualização
  );

const deleteService = (id) => User.findOneAndDelete({ _id: id });

export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
  deleteService
};
