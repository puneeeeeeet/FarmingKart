"use client";
import { Icon } from "../icon";
import { ArrowDown } from "../icons/arrowDown";
import { Kart } from "../icons/kart";
import Link from "next/link";
import Image from "next/image";
import tractor from "../../(pages)/assets/images/tractor.jpeg";
// import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Nav() {
  // const { data: session } = useSession();
  const inactiveLink = "flex justify-center items-center p-2 ";
  const activeLink = inactiveLink + "bg-[#720C1A] rounded-md";
  const pathname = usePathname();

  return (
    <div className="bg-[#72B462]   flex flex-col">
      <div className="flex gap-2 items-center  justify-center text-white">
        <Link href={"/"} className="  pr-10 mix-blend-darken	mb-1 ">
          <Image src={tractor} width="auto" height="60" alt="Logo" />
        </Link>
        
        <div className="flex">
        <p className="  w-20  items-center justify-center flex ">
          Shop Now
        </p>
        <Link href={"/"} className="">
          <Icon icon={Kart} size="large" />
        </Link> 
        </div>
        
        <div className="flex items-center gap-2 ml-5">
          
          <div>
          </div>
        </div>
      </div>

      <div className=" bg-[#549744] h-10 flex justify-center	font-bold items-center gap-1 sm:gap-10 text-white">
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
