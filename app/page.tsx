import Image from "next/image";
import blott from "../public/blott.svg";
import lmg from "../public/lmg.svg";

export default function Home() {
  const data = [
    {
      title: "The Economic Times",
      image: lmg,
      date: "12 June 2021",
      sub_title: "Markets FTSE slides almost 2pc as sterling sinks to $1.38",
    },
    {
      title: "The Economic Times",
      image: lmg,
      date: "12 June 2021",
      sub_title: "Markets FTSE slides almost 2pc as sterling sinks to $1.38",
    },
    {
      title: "The Economic Times",
      image: lmg,
      date: "12 June 2021",
      sub_title: "Markets FTSE slides almost 2pc as sterling sinks to $1.38",
    },
    {
      title: "The Economic Times",
      image: lmg,
      date: "12 June 2021",
      sub_title: "Markets FTSE slides almost 2pc as sterling sinks to $1.38",
    },
    {
      title: "The Economic Times",
      image: lmg,
      date: "12 June 2021",
      sub_title: "Markets FTSE slides almost 2pc as sterling sinks to $1.38",
    },
    {
      title: "The Economic Times",
      image: lmg,
      date: "12 June 2021",
      sub_title: "Markets FTSE slides almost 2pc as sterling sinks to $1.38",
    },
    {
      title: "The Economic Times",
      image: lmg,
      date: "12 June 2021",
      sub_title: "Markets FTSE slides almost 2pc as sterling sinks to $1.38",
    },
    {
      title: "The Economic Times",
      image: lmg,
      date: "12 June 2021",
      sub_title: "Markets FTSE slides almost 2pc as sterling sinks to $1.38",
    },
    {
      title: "The Economic Times",
      image: lmg,
      date: "12 June 2021",
      sub_title: "Markets FTSE slides almost 2pc as sterling sinks to $1.38",
    },
    {
      title: "The Economic Times",
      image: lmg,
      date: "12 June 2021",
      sub_title: "Markets FTSE slides almost 2pc as sterling sinks to $1.38",
    },
    {
      title: "The Economic Times",
      image: lmg,
      date: "12 June 2021",
      sub_title: "Markets FTSE slides almost 2pc as sterling sinks to $1.38",
    },
    {
      title: "The Economic Times",
      image: lmg,
      date: "12 June 2021",
      sub_title: "Markets FTSE slides almost 2pc as sterling sinks to $1.38",
    },
    {
      title: "The Economic Times",
      image: lmg,
      date: "12 June 2021",
      sub_title: "Markets FTSE slides almost 2pc as sterling sinks to $1.38",
    },
    {
      title: "The Economic Times",
      image: lmg,
      date: "12 June 2021",
      sub_title: "Markets FTSE slides almost 2pc as sterling sinks to $1.38",
    },
  ];
  return (
    <div className="flex gap-4 flex-col bg-[#0E0D13]">
      <div className="flex items-center py-6 justify-center max-sm:border-b-2 max-sm:border-gray-700">
        <Image src={blott} alt="logo" />
      </div>
      <div className="py-10 px-12 font-medium text-5xl max-sm:font-bold max-sm:text-2xl">
        NEWS
      </div>

      <div className="grid grid-cols-4 gap-6 px-12 max-[1017px]:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-4 flex gap-2 flex-col max-sm:flex max-sm:gap-4 max-sm:justify-between"
          >
            <div className="">
              <Image
                src={item.image}
                alt="logo"
                className="w-full h-56 object-contain"
              />
            </div>
            <div className="">
              <div className="justify-between flex text-xs leading-4 uppercase">
                <p className="">{item.title}</p>
                <p>{item.date}</p>
              </div>
              <p className="text-xl font-medium leading-6">{item.sub_title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
