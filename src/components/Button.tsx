import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color: string;
  bgColor: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  bgColor,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`w-full h-10 bg-${bgColor} text-${color} text-[16px] font-normal leading-[16px] text-center py-[12px] mt-[24px] rounded-[12px]`}
    >
      {children}
    </button>
  );
};
