import Image from "next/image";
import { ConnectButton } from "web3uikit";

function Sidebar() {
  return (
    <div className="h-screen w-[300px] flex flex-col items-center bg-slate-300 ">
      <div className="flex flex-col bg-slate-500 w-full items-center">
        <div className="py-6 flex flex-col items-center">
          <Image
            src={"https://avatars.dicebear.com/api/bottts/julia.svg"}
            width={100}
            height={100}
          />
          <div>
            <input
              className="w-[250px] h-8 px-2 rounded-md  outline-none bg-blue-600 hover:bg-blue-400 duration-200 "
              type="text"
              placeholder="Hello"
            />
            <div className="flex justify-center pt-2">
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
