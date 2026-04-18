import {
  createRoleRepo,
  findRoleByIdRepo
} from "../repositories/role.repository";

import {
  findUserRoleRepo,
  createUserRoleRepo,
  getUserRolesRepo
} from "../repositories/userRole.repository";


export const createRoleService = async (data: any) => {
  return await createRoleRepo(data);
};


export const assignRoleService = async (data: any) => {
  const existing = await findUserRoleRepo({
    userId: data.userId,
    tenantId: data.tenantId,
    clientId: data.clientId
  });

  if (existing) {
    throw new Error("Role already assigned");
  }

  return await createUserRoleRepo(data);
};


export const getUserRolesService = async (userId: string) => {
  return await getUserRolesRepo(userId);
};