import Toggle from '../models/Toggles.js'

const createToggle = (body) => Toggle.create(body);

const findAllToggles = () => Toggle.find();

const findToggleById = (id) => Toggle.findById(id);

const updateToggle = (id, body) => {
  const updates = { ...body };
  return Toggle.findByIdAndUpdate(id, updates, { new: true });
};

const deleteToggle = (id) => Toggle.findByIdAndDelete(id);

export default {
  createToggle,
  findAllToggles,
  findToggleById,
  updateToggle,
  deleteToggle,
};
