import { useIndexedDB } from "react-indexed-db-hook";

const USER_STORE = "user";

export const useUserDB = () => {
  const { add, update, getAll, getById, deleteRecord } =
    useIndexedDB(USER_STORE);

  const addUser = async (userData) => {
    try {
      const id = await add(userData);
      console.log("user added successfull", id);
      return id;
    } catch (error) {
      console.error("Error adding user", error);
      throw error;
    }
  };

  return { addUser };
};
