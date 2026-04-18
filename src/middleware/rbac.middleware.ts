
import { checkPermission } from "../engine/rbac.engine";

export const authorize = (action: string) => {
  return async (req: any, res: any, next: any) => {
    const { userId, tenantId } = req.user;
    const clientId = req.headers["x-client-id"];

    const result = await checkPermission({ userId, tenantId, clientId, action });
    if (!result.allowed) {
      return res.status(403).json({ error: "RBAC_DENIED" });
    }
    next();
  }
}
