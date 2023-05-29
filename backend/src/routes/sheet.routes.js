import { Router} from "express"
import sheetController from "../controllers/sheet.controller.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import multer from 'multer';
const router = Router();

// Configurando o Multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", authMiddleware, upload.single('avatar'), sheetController.createService);
router.get("/", authMiddleware, sheetController.getAllFichas);
router.get("/:id", authMiddleware, sheetController.getFichaById);
router.put("/:id", authMiddleware, upload.single('avatar'), sheetController.updateFicha)
router.delete('/:id', authMiddleware, sheetController.deleteFicha);

export default router;
