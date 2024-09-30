import { useIndexedDB } from "react-indexed-db-hook";

const USER_STORE = "user";

export const useUserDB = () => {
  const { add, update, getAll, getById, deleteRecord } =
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

  return { addUser, getAllUsers };
};
