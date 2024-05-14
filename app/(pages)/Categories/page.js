import Link from "next/link";
import spray2 from "../assets/images/spray2.jpg";
import Image from "next/image";
import insecticide from "../assets/images/insecticide.png";
import insecticide0 from "../assets/images/insecticide0.jpg";
import seeds from "../assets/images/seeds.png";
import fungicide from "../assets/images/fungicide.jpg";
import growthPromo from "../assets/images/growthPromo.png";

export default function Categories() {
  return (
    <div className=" h-full bg-[#F4E5E5] sm:bg-white w-full sm:justify-center sm:items-center flex  flex-col gap-2">

      <div className="text-2xl ml-2 mt-6 sm:text-3xl font-medium font-serif drop-shadow-2xl">
        SHOP BY CATEGORIES
      </div>
      <div className="bg-[#F4E5E5] h-full w-full sm:w-fit sm:h-fit mt-4 rounded-lg">
        <div className="m-3 ">
          <div className="flex gap-3 ">
            <Link
              href="/Herbicides"
              className="bg-[#D2D7F1] w-40 h-52 sm:w-full sm:h-64 rounded-lg"
            >
              <div className=" w-full justify-end items-end flex px-2.5 sm:px-10 py-3 text-2xl">
                HERBICIDES
              </div>
              <div className=" mt-5">
                <Image
                  className="w-40 h-28 sm:w-64 sm:h-48 mix-blend-darken"
                  src={spray2}
                  objectFit="true"
                />
              </div>
            </Link>
            <Link
              href={"/"}
              className="bg-[#9FD58C] h-52 w-48 sm:h-64 sm:w-full rounded-lg"
            >
              <div className="px-2.5 py-3 text-2xl ">INSECTICIDE</div>
              <div className="flex w-full justify-between gap-3 mix-blend-darken  h-fit ">
                <Image
                  className="mt-8 w-36 h-28 sm:w-44 sm:h-32"
                  src={insecticide0}
                  objectFit="true"
                />
                <Image
                  className="sm:mb-20 sm:w-24 sm:h-24 sm:mr-5 w-0 h-0"
                  src={insecticide}
                  objectFit={true}
                />
              </div>
            </Link>
          </div>
          <div className="sm:flex sm:gap-2 grid-cols-2 grid   mt-3">
            <Link
              href={"/"}
              className="bg-[#D9D9D9] rounded-lg h-52 w-40 sm:h-60 sm:w-60 "
            >
              <div className="px-10  py-2 text-2xl w-full">SEEDS</div>
              <Image
                className=" mt-6 sm:mt-10 ml-4 sm:ml-10 w-40 h-32 mix-blend-darken"
                src={seeds}
                objectFit={true}
              />
            </Link>
            <Link
              href={"/"}
              className="bg-[#F8D3C3] rounded-lg h-52  w-48 sm:w-60 sm:h-60"
            >
              <div className="sm:px-10 px-4 py-2 text-2xl">FUNGICIDE</div>
              <Image
                className="w-28 sm:w-32 h-32 sm:h-40 mt-2 sm:mt-5 ml-10 mix-blend-darken"
                src={fungicide}
                objectFit={true}
              />
            </Link>
            <Link
              href={"/"}
              className="bg-[#E0EF81] ml-20 mt-2 sm:mt-0 sm:ml-0 rounded-lg h-52 w-48 sm:h-60 sm:w-60 "
            >
              <div className="sm:px-3 py-2 px-2 text-2xl flex justify-center items-end">
                GROWTH PROMOTERS
              </div>
              <Image
                className="sm:w-40 sm:h-40 w-32 h-32  ml-8 mix-blend-darken"
                src={growthPromo}
                objectFit={true}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
