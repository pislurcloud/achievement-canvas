import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "Valiance Solutions",
    role: "AI Product Manager — Gen AI",
    period: "Jan 2025 — Present",
    summary:
      "Leading a Generative AI product transforming IOCL tender evaluation; defining vision, roadmap and metrics, driving reusable LLM components, Agile delivery and CI/CD, and aligning secure, scalable cloud architecture to improve adoption and efficiency.",
    technologies: ["GPT-4", "Claude", "LangChain", "LangGraph", "Azure", "Python"],
    teamSize: "Cross-functional team of 8",
    impact: "75% reduction in tender processing time, $2M+ annual cost savings"
  },
  {
    company: "UST Global",
    role: "Engineering Manager",
    period: "Feb 2021 - Dec 2024",
    summary:
      "Directed AI/ML platform strategy and a $500K TCV cloud AI portfolio; led 20+ engineers, integrated cloud‑native architectures (Azure, GCP, AWS), established CI/CD and DevOps, and delivered predictive analytics and GPT‑based solutions at scale.",
    technologies: ["GPT-4", "AutoGen", "CrewAI", "Azure", "GCP", "AWS", "n8n"],
    teamSize: "20+ engineers across 3 teams",
    impact: "$500K+ TCV delivered, 40% improvement in model deployment speed"
  },
  {
    company: "BlueStar Jackson Ltd.",
    role: "Data Analyst",
    period: "Dec 2019 — Mar 2021",
    summary:
      "Architected automated data workflows and database standards for scalable AI insights; built robust data preparation and quality processes that improved model accuracy and enabled reliable, real‑time analytics.",
    technologies: ["Python", "SQL", "Power BI", "Azure Data Factory"],
    teamSize: "Data team of 5",
    impact: "65% improvement in model accuracy, 50% faster data pipeline processing"
  },
  {
    company: "Tech Mahindra Ltd.",
    role: "Technical Project Manager",
    period: "Mar 2008 — Jul 2018",
    summary:
      "Managed multi‑national telco programs and Azure‑based infrastructure; led cloud solution development, ensured service reliability, and drove migrations with strong knowledge transfer, documentation, and cross‑functional coordination.",
    technologies: ["Azure", "SQL Server", "SharePoint", "Power BI"],
    teamSize: "12+ team members across regions",
    impact: "99.9% service uptime, successful migration of 50+ applications"
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-6 lg:px-12" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 id="experience-heading" className="text-3xl lg:text-4xl font-bold text-foreground">Experience</h2>
          <div className="flex-1 h-0.5 bg-primary"></div>
        </div>

        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <Card
              key={`${exp.company}-${exp.role}-${index}`}
              className="border-2 border-primary/20 bg-muted transition-all duration-300 hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-foreground">
                    {exp.role} — {exp.company}
                  </h3>
                  <p className="text-sm font-medium text-primary">{exp.period}</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">{exp.summary}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-foreground">Technologies:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-foreground">Team:</span>
                    <span className="text-muted-foreground">{exp.teamSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-foreground">Impact:</span>
                    <span className="text-muted-foreground">{exp.impact}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
