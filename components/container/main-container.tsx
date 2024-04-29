import { ReactNode } from "react";

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center text-center md:text-start my-10 md:my-20 container">
      {children}
    </div>
  );
}
