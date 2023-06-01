import User from '../models/User.js';

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (id, avatar) => User.findOneAndUpdate({ _id: id }, {avatar});

const deleteService = (id) => User.findByIdAndDelete(id);

export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
  deleteService
};