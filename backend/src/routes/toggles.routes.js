import { Router} from "express"
import togglesController from "../controllers/toggles.controller.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import multer from 'multer';
const router = Router();

// Configurando o Multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", authMiddleware, upload.single('avatar'), togglesController.createToggle);
router.get("/", authMiddleware, togglesController.findAllToggles);
router.get("/:id", authMiddleware, togglesController.findToggleById);
router.put("/:id", authMiddleware, upload.single('avatar'), togglesController.updateToggle)
router.delete('/:id', authMiddleware, togglesController.deleteToggle);

export default router;
