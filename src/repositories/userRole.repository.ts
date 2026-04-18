import UserRole from "../models/userRole.model";

export const findUserRoleRepo = (query: any) => {
  return UserRole.findOne(query);
};

export const createUserRoleRepo = (data: any) => {
  return UserRole.create(data);
};

export const getUserRolesRepo = (userId: string) => {
  return UserRole.find({ userId }).populate("roleId");
};