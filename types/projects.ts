export interface ProjectProps {
  id: number;
  title: string;
  link: string;
  tools: string[];
  tags: string[];
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Shopping Cart",
    link: "https://github.com/codeozdev/shopping-cart-redux-nextauth",
    tools: ["Nextjs", "TailwindCSS", "Redux", "Mongosee", "NextAuth", "MongoDB"],
    tags: ["#web", "#development", "#vercel", "api", "bcrypt"],
  },
  {
    id: 2,
    title: "Netflix Clone",
    link: "https://github.com/codeozdev/mymovie-nextjs-tailwind",
    tools: ["Nextjs", "TailwindCSS"],
    tags: ["#web", "#development", "#vercel", "api"],
  },
  {
    id: 3,
    title: "Pokemon Clerk",
    link: "https://github.com/codeozdev/pokemon-clerk-nextjs-tailwind-ts",
    tools: ["Nextjs", "TailwindCSS", "Clerk", "RadixUi"],
    tags: ["#web", "#development", "#vercel", "api"],
  },
  {
    id: 4,
    title: "Imdb Clone",
    link: "https://github.com/codeozdev/imdb-clone-next-tailwind",
    tools: ["Nextjs", "TailwindCSS"],
    tags: ["#web", "#development", "#vercel", "api"],
  },
  {
    id: 5,
    title: "Matrix",
    link: "https://github.com/codeozdev/matrix-nextjs",
    tools: ["Nextjs", "TailwindCSS", "Mongosee", "NextAuth", "MongoDB"],
    tags: ["#web", "#development", "#vercel", "api", "bcrypt"],
  },
  {
    id: 6,
    title: "CRUD",
    link: "https://github.com/codeozdev/march-project",
    tools: ["Nextjs", "TailwindCSS", "Prisma", "MongoDB"],
    tags: ["#web", "#development", "#vercel"],
  },
  {
    id: 7,
    title: "Best Food",
    link: "https://github.com/codeozdev/foods-nextjs-tailwind-ts",
    tools: ["Nextjs", "TailwindCSS"],
    tags: ["#web", "#development", "#vercel"],
  },
  {
    id: 8,
    title: "Gym",
    link: "https://github.com/codeozdev/gym-nextjs",
    tools: ["Nextjs", "TailwindCSS", "Swiper"],
    tags: ["#web", "#development", "#vercel"],
  },
];
