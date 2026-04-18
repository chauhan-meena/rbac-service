import { checkPermission } from "../engine/rbac.engine";

export const checkPermissionService = async (data: {
  userId: string;
  tenantId: string;
  clientId: string;
  action: string;
}) => {
  const result = await checkPermission(data);
  return result;
};