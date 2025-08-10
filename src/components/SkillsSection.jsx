import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming & Data Analysis
  { name: "Python", level: 90, category: "analysis" },
  { name: "NumPy", level: 85, category: "analysis" },
  { name: "Pandas", level: 85, category: "analysis" },
  { name: "Excel/Google Sheets", level: 90, category: "analysis" },

  // Databases
  { name: "MySQL", level: 80, category: "database" },
  { name: "PostgreSQL", level: 80, category: "database" },
  { name: "SQL Server", level: 75, category: "database" },
  { name: "Azure SQL Database", level: 70, category: "database" },

  // Cloud & BI
  { name: "Azure", level: 70, category: "cloud" },
  { name: "Power BI", level: 85, category: "visualization" },
  { name: "Matplotlib", level: 80, category: "visualization" },
  { name: "Seaborn", level: 80, category: "visualization" },

  // Tools
  { name: "Git/GitHub", level: 75, category: "tools" },
];

const categories = ["all", "analysis", "database", "visualization", "cloud", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
