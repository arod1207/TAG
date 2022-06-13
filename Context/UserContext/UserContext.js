import { createContext, useState, useEffect } from "react";
import { useMoralis, useNewMoralisObject } from "react-moralis";

const UserContext = createContext();

export function UserProvider({ children }) {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const [userName, setUserName] = useState("");
  const [nickName, setNickName] = useState("");

  console.log("user", user);

  const handleCheckUserName = async () => {
    const currentUserName = await user?.get("nickname");
    setUserName(currentUserName);
  };

  useEffect(() => {
    handleCheckUserName();
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (isAuthenticated) {
      handleCheckUserName();
    } else {
      console.log("Not Authenticated");
    }
  }, []);

  const handleNickName = () => {
    if (user && nickName) {
      user.set("nickname", nickName);
      user.save();
      setNickName("");
    } else {
      console.log("Cant set an empty nickname");
    }
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        userName,
        setUserName,
        nickName,
        setNickName,
        handleNickName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
