import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  { metric: "$500K+", label: "AI Solution Value Delivered" },
  { metric: "20+", label: "Cross-functional Team Members Led" },
  { metric: "75%", label: "Process Efficiency Improvement" },
  { metric: "4", label: "AI Products Launched" }
];

const Achievements = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Impact & Achievements</h2>
          <div className="flex-1 h-0.5 bg-primary"></div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-background border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {achievement.metric}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
