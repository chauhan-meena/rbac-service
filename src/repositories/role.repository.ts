import Role from "../models/role.model";

export const createRoleRepo = async (data: any) => {
  const existing = await Role.findOne({ name: data.name, clientId: data.clientId });

  if (existing) {
    throw new Error("Role already exists");
  }
  return Role.create(data);
};

export const findRoleByIdRepo = async (id: string) => {

  const role = await Role.findById(id);
  if (!role) {
    throw new Error("Role not found");
  }
  return Role.findById(id);
};