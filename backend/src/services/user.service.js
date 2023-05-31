import User from '../models/User.js';

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (id, { username, lastname, password, confirmPassword, email, phone, avatar }) =>
  User.findByIdAndUpdate(
    id,
    { username, lastname, password, confirmPassword, email, phone, avatar },
    { new: true }
  );

const deleteService = (id) => User.findByIdAndDelete(id);

export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
  deleteService
};