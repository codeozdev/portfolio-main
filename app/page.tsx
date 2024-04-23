import SkillsList from "@/components/skills/skills-list";
import MyContainer from "@/components/my-container/my-container";

export default function Home() {
  return (
    <main className="w-full">
      <MyContainer />
      <SkillsList />
    </main>
  );
}
