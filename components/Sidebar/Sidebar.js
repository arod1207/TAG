import { useContext, useState } from "react";

import Image from "next/image";
import UserContext from "../../Context/UserContext/UserContext";

import { ConnectButton } from "web3uikit";

function Sidebar() {
  const { isAuthenticated, userName, nickName, setNickName, handleNickName } =
    useContext(UserContext);

  console.log("userName", userName);

  return (
    <div className="h-screen w-[300px] flex flex-col items-center bg-blue-500 ">
      <div className="flex flex-col items-center pt-10">
        <Image src={"/logo.png"} width={200} height={200} />
        <p className="text-2xl font-bold text-white">The American Games</p>
      </div>
      <div className="flex flex-col bg-red-500 w-full items-center p-6 mt-6 rounded-xl">
        <div className="py-6 flex flex-col items-center">
          {isAuthenticated ? (
            <>
              <Image
                src={`https://avatars.dicebear.com/api/bottts/${userName}.svg`}
                width={100}
                height={100}
              />
              <div className="flex justify-center p-2">
                <ConnectButton />
              </div>
            </>
          ) : (
            <div className="flex justify-center p-2">
              <ConnectButton />
            </div>
          )}
          {isAuthenticated && !userName ? (
            <div className="flex flex-col p-2 items-center">
              <input
                className="w-[250px] h-8 p-2 rounded-md  outline-none bg-blue-600 hover:bg-blue-200 duration-200 placeholder:text-white text-center "
                type="text"
                value={nickName}
                placeholder="Add Username"
                onChange={(e) => setNickName(e.target.value)}
              />
              <div className="p-2">
                <button
                  className="border-2  rounded-md bg-red-500 outline-none px-4 round text-white hover:bg-blue-500 duration-150"
                  onClick={handleNickName}
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <div className="p-2">
              <p className="text-xl text-white">Welcome {userName}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
