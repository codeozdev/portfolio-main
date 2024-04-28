import SkillsList from "@/components/skills/skills-list";
import MyContainer from "@/components/my-container/my-container";
import MainContainer from "@/components/container/main-container";

export default function Home() {
  return (
    <main className="w-full">
      <MyContainer />
      <MainContainer>
        <SkillsList />
      </MainContainer>
    </main>
  );
}
