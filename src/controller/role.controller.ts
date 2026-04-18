import { Request, Response } from "express";
import {
  createRoleService,
  assignRoleService,
  getUserRolesService
} from "../services/role.service";


export const createRole = async (req: Request, res: Response) => {
  try {
    const role = await createRoleService(req.body);
    return res.status(201).json(role);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};


export const assignRole = async (req: Request, res: Response) => {
  try {
    const result = await assignRoleService(req.body);
    return res.status(201).json(result);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
};


export const getUserRoles = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId as string;

    const roles = await getUserRolesService(userId);
    return res.status(200).json(roles);
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};