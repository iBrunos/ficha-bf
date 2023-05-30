
import TogglesService from '../services/toggles.service.js';

const createToggle = async (req, res) => {
    try {
        const {
            toggleSeducao,
            toggleIntimidar,
            togglePersuadir,
            toggleResistencia,
            toggleEstamina,
            toggleAcrobacia,
            toggleFurtividade,
            togglePontaria,
            togglePrestidigitacao,
            toggleReligiao,
            toggleDeterminacao,
            toggleAtletismo,
            toggleDominacao,
            toggleInvestigacao,
            toggleHistoria,
            toggleAprender,
            toggleMisticismo,
            toggleDetectarAlma,
            toggleControleChi,
            toggleArmaduraEspiritual,
            toggleMedicina,
            toggleSobrevivencia,
            togglePespicacia,
            togglePercepcao,
        } = req.body;

        // Verificar se todos os campos foram enviados
        if (
            !toggleSeducao ||
            !toggleIntimidar ||
            !togglePersuadir ||
            !toggleResistencia ||
            !toggleEstamina ||
            !toggleAcrobacia ||
            !toggleFurtividade ||
            !togglePontaria ||
            !togglePrestidigitacao ||
            !toggleReligiao ||
            !toggleDeterminacao ||
            !toggleAtletismo ||
            !toggleDominacao ||
            !toggleInvestigacao ||
            !toggleHistoria ||
            !toggleAprender ||
            !toggleMisticismo ||
            !toggleDetectarAlma ||
            !toggleControleChi ||
            !toggleArmaduraEspiritual ||
            !toggleMedicina ||
            !toggleSobrevivencia ||
            !togglePespicacia ||
            !togglePercepcao
        ) {
            return res.status(400).send({
                message: 'Preencha todos os campos para o registro.',
            });
        }

        const newToggle = new Toggle({
            toggleSeducao,
            toggleIntimidar,
            togglePersuadir,
            toggleResistencia,
            toggleEstamina,
            toggleAcrobacia,
            toggleFurtividade,
            togglePontaria,
            togglePrestidigitacao,
            toggleReligiao,
            toggleDeterminacao,
            toggleAtletismo,
            toggleDominacao,
            toggleInvestigacao,
            toggleHistoria,
            toggleAprender,
            toggleMisticismo,
            toggleDetectarAlma,
            toggleControleChi,
            toggleArmaduraEspiritual,
            toggleMedicina,
            toggleSobrevivencia,
            togglePespicacia,
            togglePercepcao,
        });

        const createToggle = await TogglesService.createToggle();

        res.status(201).send({
            message: 'Toggle criado com sucesso.',
            toggle: createToggle,
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const deleteToggle = async (req, res) => {
    const { id } = req.params;

    try {
        await Toggle.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const findAllToggles = async (req, res) => {
    try {
        const toggles = await TogglesService.findAllToggles();

        if (toggles.length === 0) {
            return res.status(400).send({
                message: "There are no registered toggles",
            });
        }

        res.send(toggles);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const findToggleById = async (req, res) => {
    try {
        const id = req.params.id;
        const toggle = await TogglesService.findToggleById(id);

        if (!toggle) {
            return res.status(404).send({ message: "Toggle not found" });
        }

        res.send(toggle);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const updateToggle = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            toggleSeducao,
            toggleIntimidar,
            togglePersuadir,
            toggleResistencia,
            toggleEstamina,
            toggleAcrobacia,
            toggleFurtividade,
            togglePontaria,
            togglePrestidigitacao,
            toggleReligiao,
            toggleDeterminacao,
            toggleAtletismo,
            toggleDominacao,
            toggleInvestigacao,
            toggleHistoria,
            toggleAprender,
            toggleMisticismo,
            toggleDetectarAlma,
            toggleControleChi,
            toggleArmaduraEspiritual,
            toggleMedicina,
            toggleSobrevivencia,
            togglePespicacia,
            togglePercepcao,
        } = req.body;
        const updates = {
            toggleSeducao,
            toggleIntimidar,
            togglePersuadir,
            toggleResistencia,
            toggleEstamina,
            toggleAcrobacia,
            toggleFurtividade,
            togglePontaria,
            togglePrestidigitacao,
            toggleReligiao,
            toggleDeterminacao,
            toggleAtletismo,
            toggleDominacao,
            toggleInvestigacao,
            toggleHistoria,
            toggleAprender,
            toggleMisticismo,
            toggleDetectarAlma,
            toggleControleChi,
            toggleArmaduraEspiritual,
            toggleMedicina,
            toggleSobrevivencia,
            togglePespicacia,
            togglePercepcao,
        };

        await TogglesService.updateToggle(id, updates);

        res.send({
            message: "Toggles successfully updated.",
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export default { createToggle, findAllToggles, findToggleById, updateToggle, deleteToggle };