import { Router } from "express";
const router = Router();
import { loginUser } from '../controllers/auth'
import { loginValidation } from "../middleware/login-validation";


router.post('/login', loginValidation, loginUser);

export default router