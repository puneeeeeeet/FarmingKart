"use client";
import Nav from "./components/navbar";
import DashBoard from "./(pages)/Home/page";
// import Login from './components/login'
// import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  // const { data: session } = useSession();
  // if (!session) {
  //   return (
  //     <Login></Login>
  //   );
  // }
  return (
    <div className="bg-white  min-h-screen">
      <Nav></Nav>
      <DashBoard />
      {/* <Categories></Categories> */}
    </div>
  );
}

