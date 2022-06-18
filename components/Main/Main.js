import { useContext } from "react";
import Card from "../Card/Card";

import UserContext from "../../Context/UserContext/UserContext";

function Main() {
  const { currentAccount, buyTokens } = useContext(UserContext);

  return (
    <div className="w-full h-full mt-[50px] overflow-hidden">
      <div className="flex justify-evenly">
        <Card />
      </div>
    </div>
  );
}
export default Main;
