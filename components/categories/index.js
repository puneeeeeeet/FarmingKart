import Link from "next/link";

export default function Categories(){
    return(
        <div className="mt-10 h-full w-full flex  flex-col gap-2 items-center justify-center">
            <div className="text-4xl font-medium font-serif drop-shadow-2xl">
                SHOP BY CATEGORIES
            </div>
            <div className="bg-[#F4E5E5] h-fit w-fit mt-10 rounded-lg">
                <div className="m-3">
                <div className="flex gap-3">
                    <Link href={'/'} className="bg-[#D2D7F1] w-full h-64 rounded-lg">
                           <div className=" w-full justify-end items-end flex px-10 py-3 text-xl">
                           HERBICIDE
                            </div> 
                    </Link>
                    <Link href={'/'}  className="bg-[#9FD58C] h-64 w-full rounded-lg">     
                    <div className="px-10 py-3 text-xl ">INSECTICIDE
                            </div>
                    </Link>
                </div>

                <div className="flex gap-2 mt-3">
                    <Link href={'/'} className="bg-[#D9D9D9] rounded-lg h-60  w-60 ">
                       <div className="px-10  py-2 text-xl w-full">
                       SEEDS</div>
                    </Link>
                    <Link href={'/'} className="bg-[#F8D3C3] rounded-lg h-60  w-60 ">
                       <div className="px-10 py-2 text-xl">
                       FUNGICIDE</div>
                    </Link>
                    <Link href={'/'} className="bg-[#E0EF81] rounded-lg h-60  w-60 ">
                     <div className="px-3 py-2 text-xl flex justify-center items-end">
                     GROWTH PROMOTERS </div>   
                    </Link>

                </div>

                </div>
                

            </div>
        </div>
    )
}