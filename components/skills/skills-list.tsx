import { backend, extra, frontend, style } from "@/types/stylesdb.js";
import SkillsItem from "@/components/skills/skills-item";

export default function SkillsList() {
  return (
    <div
      className="text-center xl:text-start p-10"
      id="skills"
    >
      <div className="flex flex-col">
        <h2>My Skills</h2>
        {/* FRONTEND */}
        <SkillsItem
          name="FRONTEND"
          items={frontend}
        />

        {/* STYLE */}
        <SkillsItem
          name="STYLING"
          items={style}
        />

        {/* BACKEND */}
        <SkillsItem
          name="BACKEND"
          items={backend}
        />

        {/* EXTRA */}
        <SkillsItem
          name="EXTRA"
          items={extra}
        />
      </div>
    </div>
  );
}
