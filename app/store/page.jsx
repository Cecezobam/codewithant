"use client";
import { Input, Button, message } from "antd";
import axios from "axios";
import { useState } from "react";
import{ObjectView} from "react-object-view";
export default function Store() {
  var[res,setRes]=useState({});

  async function handleFetcher() {
     res = await axios.get("https://fakestoreapi.com/products");
     setRes(res);
  
  }
  return (
    <main>
      <h1>My Simple Web Store</h1>

      <Input placeholder="Enter Product Id" />
      <Button onClick={handleFetcher}>Get Product</Button>
    <ObjectView data={res}/>
    </main>
  );
}
