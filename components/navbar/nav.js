import { Icon } from "../icon";
import { ArrowDown } from "../icons/arrowDown";
import { Kart } from "../icons/kart";
import { Search } from "../icons/search";
import { User } from "../icons/user";
import { WishList } from "../icons/wishList";
import Link from "next/link";
import Image from "next/image";
import logo from "../logo/logo.jpg";
// import { Home } from "../icons/home";
// import { Categories } from "../icons/categories";
// import { TopBrands } from "../icons/topBrands";

export default function Nav() {
  const inactiveLink = "flex justify-center items-center p-2 ";
  const activeLink = inactiveLink + "bg-[#720C1A] rounded-md";

  return (
    <div className="bg-[#72B462]  w-screen flex flex-col">
      <div className="flex gap-2 items-center justify-center text-white">
        <Link href={"/"} className=" pb-3 pr-10 mix-blend-darken	 ">
          <Image src={logo} width="auto" height="55" alt="Logo" />
        </Link>
        <div className="border-2 h-8 w-96 rounded-md ">
          <div className="ml-2 mr-2 mt-0.5 gap-2 flex text-white items-center">
            <input
              className="bg-transparent w-full"
              placeholder="Search youur product here!"
            />
            <button>
              <Icon icon={Search} size="lessSmall" />
            </button>
          </div>
        </div>
        <button className=" ml-5">
          <Icon icon={WishList} size="medium" />
        </button>
        <button className="ml-2">
          <Icon icon={Kart} size="large" />
        </button>
        <div className="flex gap-2 ml-5">
          <div>User</div>
          <div>
            <Icon icon={User} />
          </div>
        </div>
      </div>

      <div className="w-screen bg-[#549744] h-10 flex justify-center	font-bold items-center gap-6 text-white">
        <Link href={"/"} className={inactiveLink}>
          {/* <Icon icon={Home} size="extraSmall" color="white" /> */}
          Home
        </Link>

        <Link href={"/categories"} className={activeLink}>
          {/* <Icon icon={Categories} size="lessSmall" /> */}
          Categories
          <Icon icon={ArrowDown} />
        </Link>

        <Link href={"/"} className={inactiveLink}>
          {/* <Icon  icon={TopBrands} size="lessSmall"/> */}
          Top Brands
          <Icon icon={ArrowDown} />
        </Link>

        <Link href={"/"} className={inactiveLink}>
          About
        </Link>
        <Link href={"/"} className={inactiveLink}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}
