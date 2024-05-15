import farmer from "../assets/images/farmer3.jpg"
import Image from "next/image";
import Link from "next/link";

export default function DashBoard() {
  return (
    <div className="sm:flex justify-center sm:mt-10 mt-2  itmes-center px-10 ">
         <div className="">
        <Image className="w-60 h-60 sm:w-0 sm:h-0 " src={farmer} width={500} height={500} objectFit={true}/>
      </div>
      <div className="font-medium  font-serif drop-shadow-2xl flex flex-col gap-5 mt-10 ">
        <div className="text-3xl justify-between">
          “Most things, except agriculture, can wait.”
        </div>
        <div className="text-xl">
            –Jawaharlal Nehru.
        </div>
        <div className="gap-3 flex sm:mt-10  text-white text-xl">
            <Link href='/Categories' className="bg-[#FFB72C] hover:bg-[#fcd34d] w-28 flex rounded-lg items-center justify-center">
            Explore!
        </Link>
        <Link href='/ContactUs' className="bg-[#72B462] hover:bg-[#549744] w-36 rounded-lg flex items-center justify-center">
            Contact Us
        </Link>

        </div>
        
      </div>
      <div className="">
        <Image className="w-0 h-0 sm:w-96 sm:h-64 " src={farmer} width={500} height={500} objectFit={true}/>
      </div>
     
    </div>
  );
}
