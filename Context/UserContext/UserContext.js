import { createContext, useState, useEffect } from "react";
import {
  useMoralis,
  useNewMoralisObject,
  useWeb3ExecuteFunction,
} from "react-moralis";

import { ethers } from "ethers";
import { tagABI, tagTokenAddress } from "../../lib/constants";

const UserContext = createContext();

export function UserProvider({ children }) {
  const {
    authenticate,
    Moralis,
    isAuthenticated,
    enableWeb3,
    isWeb3Enabled,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  console.log(isWeb3Enabled);
  console.log(enableWeb3);
  const contractProcessor = useWeb3ExecuteFunction();

  useEffect(() => {
    if (isAuthenticated && isWeb3Enabled) {
      console.log("Authenticated");

      enableWeb3();
    } else {
      console.log("Not Authenticated");
    }
  }, [isAuthenticated, user]);

  const buyTokens = async (val) => {
    let options = {
      contractAddress: "0x484B7ac9b4D5DD04755da583bc129a4b290823aC",
      functionName: "mint",
      abi: [
        {
          inputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      msgValue: val,
    };
    await contractProcessor.fetch({ params: options });
  };

  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        buyTokens,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
