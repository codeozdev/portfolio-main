import { ReactNode } from "react";

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-12 md:gap-20 text-center md:text-start my-10 md:my-20 container 2xl:px-24 3xl:px-0">
      {children}
    </div>
  );
}
