import Image from "next/image";

function Card() {
  const cardData = [
    {
      img: "/Macbook.webp",
      price: 1000,
    },
    {
      img: "/bnb.png",
      price: 5000,
    },
  ];

  return (
    <>
      {cardData.map((card) => (
        <div className="border-2 w-[300px] h-[300px] flex flex-col items-center rounded-b-2xl ">
          <div>
            <Image
              className="object-fill "
              src={card.img}
              width={300}
              height={200}
            />
          </div>
          <div>
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
