import { SCAppButton } from "./AppButton.styled";

interface AppButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  buttonText: string;
  className: string;
  onClick?: () => void;
}

export const AppButton = ({ type, buttonText, onClick }: AppButtonProps) => {
  return (
    <SCAppButton onClick={onClick} type={type}>
      {buttonText}
    </SCAppButton>
  );
};
