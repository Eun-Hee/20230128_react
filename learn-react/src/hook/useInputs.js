import { useState } from "react";

// src/hook/useInputs.js
export function useInputs(initialForm) {
  const [from, setForm] = useState(initialForm);

  const handleForm = (e) => {
    const { value, name } = e.target;

    setForm({ ...from, [name]: value });
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return [from, handleForm, handleReset];
}
