"use client";
import Nav from "../components/navbar";
import Categories from "../components/categories";
import TopBrands from "../components/dashBoard";
import Login from '../components/login'
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <Login></Login>
    );
  }
  return (
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
