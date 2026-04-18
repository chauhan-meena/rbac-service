import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  createRole,
  assignRole,
  getUserRoles
} from "../controller/role.controller";

import {
  createRoleValidator,
  assignRoleValidator
} from "../validators/role.validator";
const router = express.Router();


router.post(
  "/create",
  // authMiddleware,
  createRoleValidator,
  createRole
);

router.post(
  "/assign",
  // authMiddleware,
  assignRoleValidator,
  assignRole
);

router.get("/user/:userId",
  // authMiddleware,
  getUserRoles
);

export default router;