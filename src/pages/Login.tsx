import React, { useState } from "react";
import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="you@example.com"
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
        />
        <div className="flex gap-3">
          <Button
            label="Login"
            type="submit"
            variant="primary"
            color={{ background: "#4CAF50", text: "#FFFFFF" }}
          />
          <Button
            label="Cancel"
            type="button"
            variant="secondary"
            color={{ background: "#F44336", text: "#FFFFFF" }}
            onClick={() => {
              setEmail("");
              setPassword("");
            }}
          />
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
