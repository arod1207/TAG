import Image from "next/image";
import { useContext } from "react";
import UserContext from "../../Context/UserContext/UserContext";
import ContractContext from "../../Context/ContractContext/ContractContext";

function Card() {
  const { buyTokens, isAuthenticated } = useContext(UserContext);

  const cardData = [
    {
      id: 1,
      img: "/Macbook.webp",
      title: "MacBook Pro",
      price: 1000,
    },
    {
      id: 2,
      img: "/bnb.png",
      title: "1 BNB",
      price: 5000,
    },
    {
      id: 3,
      img: "/Macbook.webp",
      title: "MacBook Pro",
      price: 1000,
    },
  ];

  return (
    <>
      {cardData.map((card) => (
        <div
          key={card.id}
          className="border-2 border-[#F59E0B] w-[300px] h-[300px] flex flex-col items-center rounded-b-2xl m-6 "
        >
          <div>
            <Image
              className="object-fill transition"
              src={card.img}
              width={300}
              height={200}
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl text-white font-semibold ">{card.title}</p>
            <p className="text-2xl text-white font-bold">{card.price} TAG</p>
          </div>
          {isAuthenticated && (
            <div className="border-2 px-6 py-2 rounded-xl bg-white hover:bg-red-500 duration-200">
              <div>
                <button
                  onClick={() => buyTokens(0.001)}
                  className="text-xl font-bold "
                >
                  Buy Tokens
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
export default Card;
