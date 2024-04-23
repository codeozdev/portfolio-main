export interface SkillProps {
  id: number;
  title: string;
  img: string;
}

const frontend: SkillProps[] = [
  {
    id: 1,
    title: "HTML",
    img: "/frontend/html.png",
  },
  {
    id: 2,
    title: "JavaScript",
    img: "/frontend/javascript.png",
  },
  {
    id: 3,
    title: "TypeScript",
    img: "/frontend/typescript.png",
  },
  {
    id: 4,
    title: "React",
    img: "/frontend/react.png",
  },
  {
    id: 5,
    title: "Nextjs",
    img: "/frontend/next.png",
  },
  {
    id: 6,
    title: "Redux",
    img: "/frontend/redux.png",
  },
];

const style: SkillProps[] = [
  {
    id: 1,
    title: "Tailwind CSS",
    img: "/style/tailwind.png",
  },
  {
    id: 2,
    title: "Bootstrap",
    img: "/style/bootstrap.png",
  },
  {
    id: 3,
    title: "Material",
    img: "/style/mui.png",
  },
  {
    id: 4,
    title: "Semantic",
    img: "/style/semantic.png",
  },
  {
    id: 5,
    title: "Daisy",
    img: "/style/daisy.png",
  },
  {
    id: 6,
    title: "Sass",
    img: "/style/sass.png",
  },
];

const backend: SkillProps[] = [
  {
    id: 1,
    title: "Nodejs",
    img: "/backend/nodejs.png",
  },
  {
    id: 2,
    title: "MongoDB",
    img: "/backend/mongodb.png",
  },
  {
    id: 3,
    title: "NextAuth",
    img: "/backend/nextauth.png",
  },
  {
    id: 4,
    title: "JWT",
    img: "/backend/jwt.png",
  },
];

const extra: SkillProps[] = [
  {
    id: 1,
    title: "Rust",
    img: "/extra/rust.png",
  },
  {
    id: 2,
    title: "C#",
    img: "/extra/c.png",
  },
  {
    id: 3,
    title: "Python",
    img: "/extra/python.png",
  },
  {
    id: 4,
    title: "Linux",
    img: "/extra/linux.png",
  },
  {
    id: 5,
    title: "Git",
    img: "/extra/git.png",
  },
];

export { frontend, style, backend, extra };
