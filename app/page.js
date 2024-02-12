"use client";
import Nav from "../components/navbar/nav";
import Categories from "../components/categories";
import TopBrands from "../components/topBrands";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    // <div>
    //   logged in {session.user.email}
    // </div>
    <div className="bg-white  min-h-screen">
      <Nav></Nav>
      <TopBrands />
      <Categories></Categories>
    </div>
  );
}

// {
//   return (
//     <div className="bg-white  min-h-screen">
//       <Nav></Nav>
//       <TopBrands />
//       {/* <Categories></Categories> */}
//     </div>
//   );
// }
