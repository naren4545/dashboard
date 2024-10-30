import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  className?: string; // Optional prop
}

export default function Button({ children, href, className = "" }: ButtonProps) {
  return (
   <a href={href} className={"bg-[#F6830E] shadow-[0px_8px_15px_rgba(246,131,14,0.5)] py-4 px-8 text-center min-w-[201px] inline-block text-white " +className}>{children}</a>
  )
}
