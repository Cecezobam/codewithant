"use client";
import { Input, Button, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { ObjectView } from "react-object-view";
export default function Store() {
  var [res, setRes] = useState({});
  var [hasStarted, setHasStarted] = useState(false);

  async function handleFetcher() {
    setHasStarted(true);
    res = await axios.get("https://fakestoreapi.com/products");
    setRes(res);
    setHasStarted(false);
  }
  return (
    <main>
      <h1>My Simple Web Store</h1>

      <Input placeholder="Enter Product Id" />
      <Button loading={hasStarted} onClick={handleFetcher}>
        Get Product
      </Button>
      <ObjectView data={res} />
    </main>
  );
}
