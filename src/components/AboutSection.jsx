import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Data Analyst
            </h3>

            <p className="text-muted-foreground">
              With 1+ years of experience in data analysis, I specialize in extracting insights from data, building reports, and creating impactful visualizations to support business decisions.<br/>
              <span className="block mt-2">Key tools: <b>Python, Excel/Google Sheets, MySQL, PostgreSQL, SQL Server, Azure, Azure SQL Database, Power BI, NumPy, Pandas, Matplotlib, Seaborn, Git/GitHub</b>.</span>
            </p>

            <p className="text-muted-foreground">
              I'm passionate about solving complex business problems with data, and I am always learning new tools and techniques to stay at the forefront of the data analytics field.<br/>
              </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analysis</h4>
                  <p className="text-muted-foreground">
                    Extracting, cleaning, and analyzing data to uncover actionable insights and support business decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Visualization</h4>
                  <p className="text-muted-foreground">
                    Creating clear and interactive dashboards, charts, and reports to communicate data findings effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Reporting</h4>
                  <p className="text-muted-foreground">
                    Building automated and ad-hoc reports to help stakeholders make data-driven decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
