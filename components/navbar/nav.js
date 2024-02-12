import { Icon } from "../icon";
import { ArrowDown } from "../icons/arrowDown";
import { Kart } from "../icons/kart";
import { Search } from "../icons/search";
import { User } from "../icons/user";
import { WishList } from "../icons/wishList";
import Link from "next/link";
import Image from "next/image";
import tractor from "../images/tractor.jpeg";
import { signOut,useSession } from "next-auth/react";
// import { UserButton } from "@clerk/nextjs";
// import { Home } from "../icons/home";
// import { Categories } from "../icons/categories";
// import { TopBrands } from "../icons/topBrands";

export default function Nav() {
  const { data: session } = useSession()
  const src = `${session.user.image}`;


  const inactiveLink = "flex justify-center items-center p-2 ";
  const activeLink = inactiveLink + "bg-[#720C1A] rounded-md";

  return (
    <div className="bg-[#72B462]    flex flex-col">
      <div className="flex gap-2 items-center  justify-center text-white">
        <Link href={"/"} className="  pr-10 mix-blend-darken	 ">
          <Image src={tractor} width="auto" height="60" alt="Logo" />
        </Link>
        <div className="border-2 h-8 w-96 rounded-md ">
          <div className="ml-2 mr-2 mt-0.5 gap-2 flex text-white items-center">
            <input
              className="bg-transparent w-full"
              placeholder="Search youur product here!"
            ></input>
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
        <div className="flex items-center gap-2 ml-5">
          <div>{session.user.name}</div>
          <div>
            <button onClick={() => signOut()}>
              <Image className="rounded-full mt-2" loader={() => src} src={src} width={30} height={30}></Image>
              </button>
            {/* <UserButton  afterSignOutUrl="/"></UserButton> */}
          </div>
        </div>
      </div>

      <div className=" bg-[#549744] h-10 flex justify-center	font-bold items-center gap-6 text-white">
        <Link href={"/"} className={activeLink}>
          {/* <Icon icon={Home} size="extraSmall" color="white" /> */}
          Home
        </Link>

        <Link href={"/categories"} className={inactiveLink}>
          {/* <Icon icon={Categories} size="lessSmall" /> */}
          Categories
          <Icon icon={ArrowDown} size="medium" />
        </Link>

        <Link href={"/topBrands"} className={inactiveLink}>
          {/* <Icon  icon={TopBrands} size="lessSmall"/> */}
          Top Brands
          <Icon icon={ArrowDown} size="medium" />
        </Link>
        <Link href={"/about"} className={inactiveLink}>
          About
        </Link>
        <Link href={"/contact"} className={inactiveLink}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}

// GOOGLE_ID="412832476395-05h5ocif0pdlj1bjducu52s12ar2pdlj.apps.googleusercontent.com"
// GOOGLE_SECRET="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"

// NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZGFyaW5nLXRlcm1pdGUtMTMuY2xlcmsuYWNjb3VudHMuZGV2JA
// CLERK_SECRET_KEY=sk_test_kBbmO3ICgX1rWOP0ZJlklvdSMCC6BOEJTbAtnIbug5

// NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
// NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
// NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
// NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
