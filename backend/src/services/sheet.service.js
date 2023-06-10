import Ficha from '../models/Ficha.js';

const createService = (body) => Ficha.create(body);

const findAllService = () => Ficha.find();

const findByIdService = (id) => Ficha.findById(id);

const findFichaByUserId = (userId) => Ficha.findOne({ user: userId });

const updateService = (userId, body) => {
  return Ficha.findOneAndUpdate({ user: userId }, { $set: body }, { new: true });
};


const deleteService = (id) => Ficha.findByIdAndDelete(id);

export default {
  createService,
  findAllService,
  findByIdService,
  findFichaByUserId,
  updateService,
  deleteService,
};
