import farmer from "../assets/images/farmer3.jpg"
import Image from "next/image";
import Link from "next/link";

export default function DashBoard() {
  return (
    <div className="flex justify-center mt-10">
         
      <div className="font-medium  font-serif drop-shadow-2xl flex flex-col gap-5 mt-10 ">
        <div className="text-3xl justify-between">
          “Most things, except agriculture, can wait.”
        </div>
        <div className="text-xl">
            –Jawaharlal Nehru.
        </div>
        <div className="gap-3 flex mt-10  text-white text-xl">
            <Link href='/Categories' className="bg-[#FFB72C] w-28 flex rounded-lg items-center justify-center">
            Explore
        </Link>
        <Link href='/ContactUs' className="bg-[#72B462] w-36 rounded-lg flex items-center justify-center">
            Contact Us
        </Link>

        </div>
        
      </div>
      <div className="bg-black">
        <Image className="w-72 h-72 sm:w-96 sm:h-64 " src={farmer} width={500} height={500} objectFit={true}/>
      </div>
     
    </div>
  );
}
