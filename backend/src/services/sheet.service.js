import Ficha from '../models/Ficha.js';

const createService = (body) => Ficha.create(body);

const findAllService = () => Ficha.find();

const findByIdService = (id) => Ficha.findById(id);

const updateService = (id, body) => {
  const updates = { ...body };
  return Ficha.findByIdAndUpdate(id, updates, { new: true });
};

const deleteService = (id) => Ficha.findByIdAndDelete(id);

export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
  deleteService,
};
