import express from "express"
import { createUser,getUser,singleUser,deleteUser,updateUser } from "../controller/user.controllers.js";

const router=express.Router();

router.get("/",getUser);
router.post("/create",createUser);
router.get("/singleUser/:id",singleUser);
router.put("/update/:id",updateUser);
router.delete("/delete/:id",deleteUser);

export default router;