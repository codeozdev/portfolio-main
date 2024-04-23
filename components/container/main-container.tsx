import { ReactNode } from "react";

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-104px)] overflow-y-hidden text-center md:text-start">
      {children}
    </div>
  );
}
