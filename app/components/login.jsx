"use client";
import { Card, Form, Input, Button, message } from "antd";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  var router = useRouter("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  function handleEmail(evt) {
    setEmail(evt.target.value);
  }
  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  function handleClick() {
  
    if (email == "cece@yahoo.com" && password == "12345") {
      message.success("login successful");
      router.push("/store");
    } else {
      message.error("login failed");
    }
  }
  return (
    <Card title=" My Login" className="sm:w-1/2 m-auto mt-40">
      <p>My Login Details </p>
      <Form>
        <Form.Item>
          <Input placeholder="Enter Your Email" onChange={handleEmail} />
        </Form.Item>

        <Form.Item>
          <Input.Password
            placeholder="Enter Your Password"
            onChange={handlePassword}
          />
        </Form.Item>
      </Form>

      <Button type="primary" onClick={handleClick}>
        Login
      </Button>
    </Card>
  );
}
