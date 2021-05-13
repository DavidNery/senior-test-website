import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  { ...attrs }
) => {
  const ref = useRef(null);
  const { fieldName, registerField } = useField(attrs.name || '');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref,
      getValue: ref => ref.current.value,
    });
  }, [fieldName, ref, registerField]);

  return (
    <input
      ref={ref}
      {...attrs}
    />
  );
}

export default Input;