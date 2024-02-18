"use client";
import axios from "axios";
import { useState } from "react";
export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function createProduct(ev){
    ev.preventDefault
    const data ={title,description,price};
    await axios.post('/api/products', data)
  }

  return (
    <div className="w-full h-screen bg-[#549744] flex justify-center ">
      <div className="flex justify-center bg-white w-fit h-fit p-10 rounded-lg mt-10">
        <div className="flex flex-col ">
            <form onSubmit={createProduct}>
          <h1 className="text-[#549744] text-xl font-bold">NEW PRODUCT</h1>
          <label>Product Name</label>
          <input 
            type="text" 
            placeholder="Product name" 
            value={title} 
            onChange={ev => setTitle(ev.target.value)}></input>
          <label>Description</label>
          <textarea 
            placeholder="Description" 
            value={description} 
            onChange={ev => setDescription(ev.target.value)}></textarea>
          <label>Price</label>
          <input 
            type="number" 
            placeholder="$Price" 
            value={price} 
            onChange={ev => setPrice(ev.target.value)}></input>
          <button 
            type="submit" 
            className="btn-primary">Save</button></form>
          
        </div>
      </div>
    </div>
  );
}
