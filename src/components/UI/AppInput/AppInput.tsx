import { ErrorMessage, SCAppInput } from "./AppInput.styled";

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  errorMessage?: string;
  isError?: boolean;
}

export const AppInput = ({
  type,
  placeholder,
  errorMessage,
  isError,
  required,
  ...props
}: IInputProps) => {
  return (
    <div>
      <SCAppInput
        $isError={isError || false}
        type={type}
        placeholder={placeholder}
        required={required}
        {...props}
      />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};
