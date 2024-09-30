import { useIndexedDB } from "react-indexed-db-hook";

const USER_STORE = "user";

export const useUserDB = () => {
  const { add, update, getAll, getByID, deleteRecord } =
    useIndexedDB(USER_STORE);

  const checkIfEmailExists = async (email) => {
    try {
      const users = await getAll();
      return users.some((user) => user.email === email);
    } catch (error) {
      throw new Error("Error checking email", error);
    }
  };

  const getAllUsers = async () => {
    try {
      const users = await getAll();
      return users;
    } catch (error) {
      console.error("Error getting all users:", error);
      throw error;
    }
  };

  const addUser = async (userData) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const emailExists = await checkIfEmailExists(userData.email);
      if (emailExists) {
        throw new Error("Email already exists");
      }
      const id = await add(userData);
      console.log("User added successfully", id);
      return id;
    } catch (error) {
      throw error;
    }
  };

  const updateUser = async (id, userData) => {
    try {
      const user = await getByID(id);
      if (!user) {
        throw new Error("User not found");
      }
      const updatedUser = { ...user, ...userData };
      await update(updatedUser);

      console.log("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  };

  const deleteUser = async (id) => {
    try {
      await deleteRecord(id);
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  };

  const toggleUserBlock = async (user) => {
    try {
      const updatedUser = { ...user, isBlocked: !user.isBlocked };
      const result = await update(updatedUser);

      console.log(result, "result");
      console.log("User block status toggled successfully");
    } catch (error) {
      console.log("Error toggling user block status:", error);
      throw error;
    }
  };

  return {
    addUser,
    getAllUsers,
    updateUser,
    deleteUser,
    toggleUserBlock,
  };
};
