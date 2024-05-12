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
  });
  return data;
}

export default function Herbicides() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setProductData(data);
    }
    fetchData();
  }, []);
 

  return (
    <div>
      <div className=" mt-3 items-center justify-center grid grid-cols-7 gap-2 ">
        {productData.map((product) => (

          
          <div key={product.id} className=" flex flex-col items-center p-2 bg-gray-100 justify-center w-52 rounded-sm">
            <div className="w-full mx-2 h-40 bg-white">
              <Image
                className="w-full h-full rounded-sm"
                src={product.coverImage}
                width={900}
                height={900}
              ></Image>
            </div>
            <p className="text-xl">{product.name}</p>
            <p className="font-bold">{product.category}</p>
            <p className="font-medium ">₹{product.price}</p>
            <Link
              href="https://www.linkedin.com/in/puneet-chhabra-3089b621b/"
              className="bg-[#fbbf24] px-1 rounded-md"
            >
              Add to cart
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
