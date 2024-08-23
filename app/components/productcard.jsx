import { Card, Image, Button,Input} from "antd";
// import { Span } from "next/dist/trace";
import {useState} from "react";

export default function ProductCard({ product, handleClick }) {

  const [hasClick, setHasClick] = useState(false);


  let content
  
  
   let[counter,setCounter]=useState(0)
  
   
  function handleBuyToggle(){
    setHasClick(true)
    handleClick();
}
function increaseNum(){
  counter++
  setCounter(counter);
 
}
function decreaseNum(){
  counter--
  setCounter(counter);
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
      <div className="">
        <p>NGN{product.price}</p>
        {content}
        </div>

        <div className=" flex ">

       
       <p>Quantity </p>
       
        <Button onClick={increaseNum} >+</Button>
        {counter}

        <Button onClick={decreaseNum}>-</Button>
        </div> 
    </Card>
  );
}
