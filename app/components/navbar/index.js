"use client";
import { Icon } from "../icon";
import { ArrowDown } from "../icons/arrowDown";
import { Kart } from "../icons/kart";
import Link from "next/link";
import Image from "next/image";
import tractor from "../../(pages)/assets/images/tractor.jpeg";
// import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Kisaan24_logo from "../../(pages)/assets/images/Kisaan24_logo.jpeg"

export default function Nav() {
  // const { data: session } = useSession();
  const inactiveLink = "flex justify-center items-center p-2 ";
  const activeLink = inactiveLink + "bg-[#4d7c0f] rounded-md";
  const pathname = usePathname();

  return (
    <div className="bg-[#72B462]  justify-center items-center flex flex-col">
      <div className="  gap-3 flex text-white">
        {/* <div className="bg-black  "> */}
        <Link href={"/"} className=" px-2 gap-x-1 py-0.5 rounded-full items-center justify-center flex text-2xl font-bold 	mb-1 ">
          <Image className="rounded-md" src={Kisaan24_logo} width="auto" height="40" alt="Logo" />
         <div>KISAAN24</div> 
        </Link>
        {/* </div> */}
        
        
        <div className="flex py-1">
        <p className="  w-36 sm:w-60  ">
          
        </p>
        <Link href={"/"} className="mr-2 ">
          <Icon icon={Kart} size="large" />
        </Link> 
        </div>
        
        {/* <div className="flex items-center gap-2 ml-5">
          
          <div>
          </div>
        </div> */}
      </div>

      <div className=" bg-[#549744] w-full h-10 flex justify-center	 font-medium sm:font-bold items-center gap-1 sm:gap-10 text-white">
        <Link
          href={"/"}
          className={pathname == "/" ? activeLink : inactiveLink}
        >
          Home
        </Link>

        <Link
          href={"/Categories"}
          className={pathname == "/Categories" ? activeLink : inactiveLink}
        >
          Categories
          <Icon icon={ArrowDown} size="medium" />
        </Link>

        {/* <Link
          href={"/TopBrands"}
          className={pathname == "/TopBrands" ? activeLink : inactiveLink}
        >
          Top Brands
          <Icon icon={ArrowDown} size="medium" />
        </Link> */}
        <Link
          href={"/About"}
          className={pathname == "/About" ? activeLink : inactiveLink}
        >
          About
        </Link>
        <Link
          href={"/ContactUs"}
          className={pathname == "/ContactUs" ? activeLink : inactiveLink}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
