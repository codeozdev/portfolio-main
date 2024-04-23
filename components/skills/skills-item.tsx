"use client";

import { SkillProps } from "@/types/stylesdb.js";
import Image from "next/image";

interface SkillsItemProps {
  name: string;
  items: SkillProps[];
}

export default function SkillsItem({ name, items }: SkillsItemProps) {
  const isDark = `dark:bg-black dark:border-[#8650F6] dark:group-hover:border dark:group-hover:brightness-150 dark:shadow-none`;

  return (
    <>
      <h4>{name}</h4>
      <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1 w-full h-full">
        {items.map(item => (
          <div
            className="group"
            key={item.id}
          >
            <div
              className={`flex items-center flex-col justify-center gap-3 w-full h-full aspect-square text-center p-3 shadow-2xl ${isDark}`}
              key={item.id}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={200}
                height={200}
                quality={100}
                className="w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] dark:grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
              <p className="font-bold text-[10px] sm:text-sm text-neutral-600 dark:group-hover:text-white">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}