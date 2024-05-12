"use client";
import Nav from "./components/navbar";
// import Login from './components/login'
// import { useSession, signIn, signOut } from "next-auth/react";
import Product from "./components/product"
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
      <Product></Product>
      {/* <TopBrands />
      <Categories></Categories> */}
    </div>
  );
}

