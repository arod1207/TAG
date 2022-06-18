import { useContext, useState } from "react";

import UserContext from "../../Context/UserContext/UserContext";

import Image from "next/image";

import { Telegram } from "react-bootstrap-icons";
import { ConnectButton } from "web3uikit";

function Sidebar() {
  const { login, isAuthenticated } = useContext(UserContext);

  return (
    <div className="h-full min-w-[300px] flex flex-col items-center bg-blue-600 rounded-b-xl">
      <div className="flex flex-col items-center pt-10">
        <Image src={"/logo.png"} width={200} height={200} />
        <p className="text-2xl font-bold text-white">The American Games</p>
      </div>
      <div className="flex flex-col bg-red-500 w-full items-center p-6 mt-6 rounded-xl border-2 border-[#F59E0B]">
        <ConnectButton />
        <div className="p-2">
          {isAuthenticated && <p className="text-white text-2xl">Welcome</p>}
        </div>
      </div>
      <div className="flex flex-col items-center p-6">
        <Image src={"/spinwheel.png"} width={150} height={150} />
        <p className="text-white text-center text-lg font-semibold pt-2">
          Live Drawings Every Wednsday on Telegram
        </p>
        <p>
          <Telegram
            className="text-white hover:text-slate-400 hover:cursor-pointer"
            size={32}
          />
        </p>
      </div>
    </div>
  );
}
export default Sidebar;
