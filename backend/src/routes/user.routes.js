import { Router} from "express"
import userController from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import multer from 'multer';
const router = Router();

// Configurando o Multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/",  upload.single('avatar'), userController.createService);
router.get("/",  userController.findAll);
router.get("/:id",  userController.findById);
router.put("/:id", authMiddleware, upload.single('avatar'), userController.update)
router.delete('/:id', authMiddleware, userController.deleteUser);

export default router;
