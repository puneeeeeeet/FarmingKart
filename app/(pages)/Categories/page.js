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
    <div className="mt-6 h-full w-full flex  flex-col gap-2 items-center justify-center">
      <div className="text-4xl font-medium font-serif drop-shadow-2xl">
        SHOP BY CATEGORIES
      </div>
      <div className="bg-[#F4E5E5] h-fit w-fit mt-4 rounded-lg">
        <div className="m-3 ">
          <div className="flex gap-3 ">
            <Link href="/Herbicides" className="bg-[#D2D7F1] w-full h-64 rounded-lg">
              <div className=" w-full justify-end items-end flex px-10 py-3 text-2xl">
                HERBICIDE
              </div>
              <div className="w-64 h-60 mt-5">
                <Image
                  className="w-64 h-48 mix-blend-darken"
                  src={spray2}
                  objectFit="true"
                />
              </div>
            </Link>
            <Link href={"/"} className="bg-[#9FD58C] h-64 w-full rounded-lg">
              <div className="px-10 py-3 text-2xl ">INSECTICIDE</div>
              <div className="flex w-full justify-between gap-3 mix-blend-darken  h-fit ">
                <Image
                  className="mt-12 w-44 h-32"
                  src={insecticide0}
                  objectFit="true"
                />
                <Image
                  className="mb-20 w-24 h-24 mr-5 "
                  src={insecticide}
                  objectFit={true}
                />
              </div>
            </Link>
          </div>
          <div className="flex gap-2  mt-3">
            <Link href={"/"} className="bg-[#D9D9D9] rounded-lg h-60  w-60 ">
              <div className="px-10  py-2 text-2xl w-full">SEEDS</div>
              <Image
                className=" mt-10 ml-10 w-40 h-32 mix-blend-darken"
                src={seeds}
                objectFit={true}
              />
            </Link>
            <Link href={"/"} className="bg-[#F8D3C3] rounded-lg h-60  w-60 ">
              <div className="px-10 py-2 text-2xl">FUNGICIDE</div>
              <Image
                className="w-32 h-40 mt-5 ml-10 mix-blend-darken"
                src={fungicide}
                objectFit={true}
              />
            </Link>
            <Link href={"/"} className="bg-[#E0EF81] rounded-lg h-60  w-60 ">
              <div className="px-3 py-2 text-2xl flex justify-center items-end">
                GROWTH PROMOTERS
              </div>
              <Image
                className="w-40 h-40 ml-8 mix-blend-darken"
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
