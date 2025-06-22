"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Users, Download, Award, Coffee, Heart } from "lucide-react"

const skills = [
  {
    icon: Code,
    title: "Development",
    description: "Full-stack development with modern technologies like React, Next.js, Node.js, and Python.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating beautiful, user-centered designs with attention to detail and accessibility.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Building fast, optimized applications that provide excellent user experiences.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams and communicating complex ideas clearly.",
    color: "from-green-500 to-emerald-500",
  },
]

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
    achievements: ["Led team of 5 developers", "Increased performance by 40%", "Delivered 15+ projects"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and collaborated with design teams to create engaging user experiences.",
    achievements: ["Built 20+ responsive websites", "Improved user engagement by 60%", "Mentored junior developers"],
  },
  {
    title: "Junior Developer",
    company: "StartupXYZ",
    period: "2019 - 2020",
    description: "Built and maintained web applications while learning modern development practices and technologies.",
    achievements: ["Contributed to 10+ projects", "Learned 5+ new technologies", "Received 'Rising Star' award"],
  },
]

const stats = [
  { icon: Award, label: "Projects Completed", value: "50+" },
  { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
  { icon: Heart, label: "Happy Clients", value: "30+" },
  { icon: Code, label: "Lines of Code", value: "100K+" },
]

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6"
            >
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium">Get to know me</span>
            </motion.div>

            <h1 className="text-4xl font-bold mb-4 text-gradient">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer with a love for creating digital experiences that matter. With expertise in
              both frontend and backend technologies, I bring ideas to life.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AnimatedCard delay={index * 0.1} className="text-center p-6">
                  <CardContent className="pt-0">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AnimatedCard delay={index * 0.1} className="text-center h-full">
                  <CardContent className="pt-6 h-full flex flex-col">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${skill.color} p-4 flex items-center justify-center`}
                    >
                      <skill.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground flex-1">{skill.description}</p>
                  </CardContent>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>

          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gradient">My Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Started as a curious student exploring the world of programming, I've evolved into a full-stack
                  developer with a passion for creating meaningful digital experiences. My journey has been driven by
                  continuous learning and a desire to solve real-world problems.
                </p>
                <p>
                  Over the years, I've had the privilege of working with amazing teams and clients, building everything
                  from small business websites to large-scale enterprise applications. Each project has taught me
                  something new and helped me grow as both a developer and a problem solver.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge through my blog. I believe in the power of technology to make a positive impact
                  on people's lives.
                </p>
              </div>
              <div className="mt-6">
                <AnimatedButton glowColor="blue" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </a>
                </AnimatedButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Technologies I work with</h3>
                <div className="space-y-4">
                  {[
                    {
                      category: "Frontend",
                      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Svelte"],
                    },
                    { category: "Backend", techs: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"] },
                    { category: "Tools & Cloud", techs: ["AWS", "Docker", "Git", "Vercel", "Figma", "VS Code"] },
                  ].map((group, index) => (
                    <motion.div
                      key={group.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <h4 className="font-semibold mb-2">{group.category}:</h4>
                      <div className="flex flex-wrap gap-2">
                        {group.techs.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full text-sm border border-primary/20 hover:border-primary/40 transition-all duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gradient">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 rounded border border-green-500/20"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </AnimatedCard>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
