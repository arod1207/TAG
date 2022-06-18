import { createContext, useState, useEffect } from "react";

import { ethers } from "ethers";
import { tagABI, tagTokenAddress } from "../../lib/constants";

const ContractContext = createContext();

export function ContractProvider({ children }) {
  const getBalance = () => {};
  return <ContractContext.Provider>{children}</ContractContext.Provider>;
}

export default ContractContext;
