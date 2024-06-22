"use client";
import { db } from "../../../app/firbaseConfig";
import React, { useDebugValue, useEffect, useState } from "react";
import { getDocs, collection, doc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "products"));
  
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
    console.log(doc.data);

  });
  return data;
}

  

export default function Insecticide() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setProductData(data);
    }
    fetchData();
  }, []);
  const insecticideFilter = productData.filter((product)=>product.category=="Insecticide");

  const [showModal,setShowModal] = useState(false);
  
  return (
    <div>
      <div className=" mt-3  grid grid-cols-2 sm:grid-cols-7 gap-2 ">
        {insecticideFilter.map((product) => (

             
          <div 
          key={product.id} 
          
          className=" flex ml-1 flex-col items-center p-2 relative z-0 bg-gray-100 justify-center w-44 sm:w-48 rounded-sm" 
          onClick={()=> setShowModal(true)}
          >
            <div className="w-full mx-2 h-36 bg-white">
              <Image
                className="w-full h-full rounded-sm"
                src={product.coverImage}
                width={900}
                height={900}
              ></Image>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="sm:text-xl">{product.name}</p>
            <p className="font-bold">{product.category}</p>
            
            </div>
            <div className="flex gap-2 ">
            <p className="font-medium ">₹{product.price}</p>
            <button
              // href="https://www.linkedin.com/in/puneet-chhabra-3089b621b/"
              className="bg-[#fbbf24] px-1 rounded-md"
            >
              Add to cart
            </button>
            </div>
          </div>
        ))}
        
        

        
        {showModal ?(
          // [#72B462]
            <div onClick={()=> setShowModal(false)} className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
                <div className="w-64 h-32 rounded-md bg-gray-200 flex flex-col items-center justify-center">
                   <div className="text-xl font-semibold px-2 " >
                 Download the App from playstore!
                  </div> 
                  <Link href={"https://play.google.com/store/apps/details?id=com.scompany.kisaan24&hl=en_IN"} 
                  className="bg-[#fbbf24] px-2 text-black text-xl rounded-md">
                  Download
                  </Link>
                  </div>
            </div>
          ): null}
      </div>
    </div>
  );
 
}
