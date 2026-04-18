import Permission from "../models/permission.model";

export const createPermissionRepo = (data: any) => {
  return Permission.create(data);
};

export const getPermissionsRepo = () => {
  return Permission.find();
};