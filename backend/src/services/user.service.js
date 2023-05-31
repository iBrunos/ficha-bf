import User from '../models/User.js';

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (id, updates) =>
  User.findByIdAndUpdate(
    id,
    updates,
    { new: true } // Define {new: true} para retornar o documento atualizado após a atualização
  );

const deleteService = (id) => User.findByIdAndDelete(id);

export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
  deleteService
};