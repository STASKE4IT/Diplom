import React, { forwardRef } from 'react';
import { ErrorMessage, SCAppInput } from "./AppInput.styled";

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  errorMessage?: string;
  isError?: boolean;
}

export const AppInput = forwardRef<HTMLInputElement, IInputProps>(({
  type,
  placeholder,
  errorMessage,
  isError,
  required,
  ...props
}, ref) => {
  return (
    <div>
      <SCAppInput
        ref={ref}
        $isError={isError || false}
        type={type}
        placeholder={placeholder}
        required={required}
        {...props}
      />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
});

