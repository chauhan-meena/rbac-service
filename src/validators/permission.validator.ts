export const checkPermissionValidator = (req: any, res: any, next: any) => {
  const { action, clientId } = req.body;

  if (!action || !clientId) {
    return res.status(400).json({
      error: "action and clientId are required"
    });
  }

  next();
};