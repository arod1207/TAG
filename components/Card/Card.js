import Image from "next/image";

function Card() {
  const cardData = [
    {
      img: "/Macbook.webp",
      title: "MacBook Pro",
      price: 1000,
    },
    {
      img: "/bnb.png",
      title: "1 BNB",
      price: 5000,
    },
    {
      img: "/Macbook.webp",
      title: "MacBook Pro",
      price: 1000,
    },
  ];

  return (
    <>
      {cardData.map((card) => (
        <div className="border-2 border-[#F59E0B] w-[300px] h-[300px] flex flex-col items-center rounded-b-2xl m-6 ">
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
          <div className="border-2 px-6 py-2 rounded-xl bg-white hover:bg-red-500 duration-200">
            <button className="text-xl font-bold ">Join</button>
          </div>
        </div>
      ))}
    </>
  );
}
export default Card;
