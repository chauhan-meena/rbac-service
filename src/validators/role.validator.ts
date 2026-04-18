export const createRoleValidator = (req: any, res: any, next: any) => {
  const { name, clientId, permissions } = req.body;

  if (!name || !clientId || !permissions) {
    return res.status(400).json({
      error: "name, clientId, permissions are required"
    });
  }

  if (!Array.isArray(permissions)) {
    return res.status(400).json({
      error: "permissions must be an array"
    });
  }

  next();
};


export const assignRoleValidator = (req: any, res: any, next: any) => {
  const { userId, tenantId, clientId, roleId } = req.body;

  if (!userId || !tenantId || !clientId || !roleId) {
    return res.status(400).json({
      error: "userId, tenantId, clientId, roleId are required"
    });
  }

  next();
};