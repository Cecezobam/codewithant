import { Card, Image, Button } from "antd";
// import { Span } from "next/dist/trace";
import {useState} from "react";

export default function ProductCard({ product, handleClick }) {

  const [hasClick, setHasClick] = useState(false);
  let content;
  
  function handleBuyToggle(){
    setHasClick(true)
    handleClick();
  }

  if (hasClick) {
    content = <span>true</span>;
  } else {
    content = (
      <Button type="primary" onClick={handleBuyToggle}>
        Buy Me
      </Button>
    );
  }

  return (
    <Card title={product.title} className="w-1/4 m-4">
      <Image src={product.image} alt={product.image} height={200} />
      <div className="flex justify-between">
        <p>NGN{product.price}</p>
        {content}
      </div>
    </Card>
  );
}
