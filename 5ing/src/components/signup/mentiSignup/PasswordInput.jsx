import React, { useState } from "react";
import { styled } from "styled-components";

const PasswordInput = () => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const validatePassword = () => {
    const pattern =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;

    if (!pattern.test(password)) {
      alert("비밀번호는 영어, 숫자, 특수문자를 포함하여 6~12자여야 합니다.");
      setPassword("");
    }
  };

  return (
    <Input
      type="password"
      id="password"
      name="password"
      placeholder="영어, 숫자, 특수문자를 포함하여 6~12자"
      value={password}
      onChange={handlePasswordChange}
      onBlur={validatePassword}
    />
  );
};

export default PasswordInput;

const Input = styled.input`
  font-size: 14px;
  height: 20px;
  width: 250px;
  border-radius: 8px;
  border: 1px solid #888;
  padding: 10px;
  &::placeholder {
    color: darkgray;
    font-size: 13px;
    font-weight: 300;
    opacity: 1;
  }
`;
