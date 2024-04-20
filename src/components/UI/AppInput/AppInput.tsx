type AppInputProps = {
  inputType: string;
  inputPlaceHolder: string;
};

export const AppInput = ({ inputPlaceHolder, inputType }: AppInputProps) => {
  return (
    <div>
      <input type={inputType} placeholder={inputPlaceHolder} />
    </div>
  );
};
