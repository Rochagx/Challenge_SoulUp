import type { ReactNode, CSSProperties } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function Container({ children, className = "", style }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-container px-4 md:px-6 ${className}`} style={style}>
      {children}
    </div>
  );
}
