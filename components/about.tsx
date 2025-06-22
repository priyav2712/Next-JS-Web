import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "Full-stack development with modern technologies like React, Next.js, Node.js, and Python.",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful, user-centered designs with attention to detail and accessibility.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast, optimized applications that provide excellent user experiences.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating complex ideas clearly.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer with a love for creating digital experiences that matter. With expertise in both
            frontend and backend technologies, I bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <skill.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              Started as a curious student exploring the world of programming, I've evolved into a full-stack developer
              with a passion for creating meaningful digital experiences. My journey has been driven by continuous
              learning and a desire to solve real-world problems.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge through my blog. I believe in the power of technology to make a positive impact on
              people's lives.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Technologies I work with:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "AWS",
                  "Docker",
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
