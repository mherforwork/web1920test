
import { useState } from 'react';

const useForm = callback => {
  const [inputs, setInputs] = useState({});

  const submitHandler = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const inputChangeHandler = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    submitHandler,
    inputChangeHandler,
    inputs
  };
};

export {
  useForm
};
