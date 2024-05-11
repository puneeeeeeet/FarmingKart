'use client'
import {db} from '../../../app/firbaseConfig';
import React, {useDebugValue, useEffect, useState} from 'react';
import { getDocs, collection, doc} from 'firebase/firestore';
import Image from 'next/image';

async function fetchDataFromFirestore(){
    const querySnapshot = await getDocs(collection(db,"products"))

    const data = [];
    querySnapshot.forEach((doc) =>{
        data.push({ id: doc.id, ...doc.data()})
    });
    return data;
}

export default function Herbicides(){
const [productData, setProductData] = useState([]);

useEffect(()=>{
    async function fetchData(){
        const data = await fetchDataFromFirestore();
        setProductData(data);
    }
    fetchData();
},[]);
// const myLoader=({src})=>{
//     return ``;
//   }

    return (
        <div>
           <div className=' mt-3 items-center justify-center grid grid-cols-7 gap-2 '>
            {productData.map((product)=>(
                <div key={product.id} className=' flex flex-col items-center p-2 bg-gray-100 justify-center w-52'>
                    <div className='w-full mx-2 h-40 bg-white'>
                        </div>
                    <p className='text-xl'>{product.name}</p>

                    {/* <Image loader={myLoader} src={product.coverImage} width={500}
    height={500}/> */}
                    <p className='font-bold'>{product.category}</p>
                    <p className='font-medium'>₹{product.price}</p>
                    {/* <p>{product.description}</p> */}
                    
                    {/* <Image src={product.coverImage} width={100} height={100}></Image> */}

                    </div>
            ))}
           </div>
        </div>
    )
}   