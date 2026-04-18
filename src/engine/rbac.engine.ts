
import Role from "../models/role.model";
import UserRole from "../models/userRole.model";

export const checkPermission = async ({ userId, tenantId, clientId, action }: any) => {
  const userRole = await UserRole.findOne({ userId, tenantId, clientId });
  if (!userRole) return { allowed: false };

  const role = await Role.findById(userRole.roleId);
  if (!role) return { allowed: false };

  const allowed = role.permissions.includes(action) || role.permissions.includes("*");
  return { allowed };
}
