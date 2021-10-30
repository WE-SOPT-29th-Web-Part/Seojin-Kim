import React from "react";

import { Input } from "../style/Input";

const SearchInput = ({ setTargetUser }) => {
  const handleInput = (e) => {
    e.preventDefault();
    const inputElement = e.target.elements.username;
    setTargetUser(inputElement.value);
    inputElement.value = "";
  };
  return (
    <form onSubmit={handleInput}>
      <Input
        name="username"
        type="text"
        placeholder="Github 프로필을 검색해보세요"
      />
    </form>
  );
};

export default SearchInput;
