import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { checkPermissionController } from "../controller/permission.controller";
import { checkPermissionValidator } from "../validators/permission.validator";

const router = express.Router();


router.post("/check",
    authMiddleware,
    checkPermissionValidator,
    checkPermissionController
);

export default router;