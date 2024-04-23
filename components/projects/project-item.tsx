import { ProjectProps } from "@/types/projects";
import Link from "next/link";

export default function ProjectItem({ title, link, tools, tags }: ProjectProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-10 dark:bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 p-4 sm:p-6 rounded-xl">
        <div className="flex-1 flex flex-col gap-5 sm:justify-between">
          <h2 className="capitalize text-3xl font-bold">{title}</h2>
          <Link
            href={link}
            className="px-8 py-4 capitalize border border-black/40 dark:border-white/20 rounded-[9999px] flex items-center justify-center text-sm font-medium w-max gap-1.5 hover:border-black dark:hover:border-white transition group mx-auto md:mx-0"
            target="_blank"
          >
            open project
            <span className="text-lg text-blue-600 group-hover:text-black dark:group-hover:text-white transition">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    fill="none"
                    d="M0 0h24v24H0z"
                  ></path>
                  <path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"></path>
                </g>
              </svg>
            </span>
          </Link>
        </div>
        <div className="space-y-6 flex-1">
          {/*TOOL*/}
          <div className="space-y-2">
            <h3 className="font-bold capitalize">tools</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {tools.map(tool => (
                <div
                  key={tool}
                  className="border-2 border-black/40 dark:border-white/20 px-4 py-2 rounded-full text-xs cursor-default hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
          {/*TAGS*/}
          <div className="space-y-2">
            <h3 className="font-bold capitalize">tags</h3>
            <div className="flex justify-center md:justify-start flex-wrap gap-2">
              {tags.map(tag => (
                <div
                  key={tag}
                  className="text-xs dark:text-sky-300"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
