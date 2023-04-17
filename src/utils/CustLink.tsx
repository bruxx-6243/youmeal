import { Link, useMatch } from "react-router-dom";

interface LinkProps {
  children: React.ReactNode;
  to: string;
}

export const CustomLink: React.FC<LinkProps> = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <Link
      className={`flex gap-x-[8px] px-3 py-2 text-[16px] font-normal leading-6 rounded-full transition-bg duration-300 bg-white ${
        match && "bg-yellow"
      }`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};
