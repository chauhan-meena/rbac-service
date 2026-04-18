import { Request, Response } from "express";
import { checkPermission } from "../engine/rbac.engine";


export const checkPermissionController = async (req: any, res: Response) => {
  try {
    const { action, clientId } = req.body;
    const { userId, tenantId } = req.user;

    
    if (!action || !clientId) {
      return res.status(400).json({
        error: "action and clientId are required"
      });
    }

    //RBAC engine
    const result = await checkPermission({
      userId,
      tenantId,
      clientId,
      action
    });

    return res.status(200).json(result);

  } catch (error) {
    console.error("Permission check error:", error);

    return res.status(500).json({
      error: "Internal server error"
    });
  }
};