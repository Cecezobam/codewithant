"use client";
import { Input, Button, message, Typography, FloatButton } from "antd";
import axios from "axios";
import { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ProductCard from "../components/productcard";
// import { ObjectView } from "react-object-view";

export default function Store() {
  var [res, setRes] = useState([]);
  var [hasStarted, setHasStarted] = useState("");

  var[cart,setCart]=useState(0)

  function handleMap(item) {
    return <ProductCard product={item} key={item.id} handleClick={handleCart} />;
  }

  async function handleFetcher() {
    setHasStarted(true);
    res = await axios.get("https://fakestoreapi.com/products");

    setRes(res.data);
    setHasStarted(false);
  }

  function handleCart(){
 
    setCart(cart+1);
  }
  return (
    <main>
      <div className="text-center">
        <Typography.Title> My Simple Web Store</Typography.Title>

        <Input.Search placeholder="Enter Product Id" className="w-2/4" />

        <Button loading={hasStarted} onClick={handleFetcher}>
          Get Product
        </Button>
      </div>
      <div className="flex flex-wrap justify-center">{res.map(handleMap)}</div>
      <FloatButton  icon={<ShoppingCartOutlined />}badge={{count:cart}} />
    </main>
  );
}
