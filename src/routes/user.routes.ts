import { Router ,Request, Response} from "express";
import { createUser, getUserDetails, updateUser } from "../controllers/user.controller"
const router = Router();

router.get("/get_user_details/:id", getUserDetails)
router.post("/signup", createUser);
router.patch("/update_user_details/:id", updateUser);

export default router;