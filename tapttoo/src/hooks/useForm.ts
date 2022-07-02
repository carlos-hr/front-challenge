import React, { useState } from "react";

type LoginForm = {
  email: string;
  password: string;
};

const useForm = (initialState: LoginForm) => {
  const [form, setForm] = useState(initialState);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm({ ...form, [name]: value });
  };

  return { form, onChange };
};

export default useForm;
