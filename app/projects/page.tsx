"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind CSS", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard that provides detailed weather information with beautiful visualizations and location-based forecasts.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Chart.js", "Weather API", "CSS3"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description:
      "A modern blog platform with markdown support, comment system, and admin dashboard for content management.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "MDX", "Prisma", "NextAuth"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "social-media-app",
    title: "Social Media App",
    description:
      "A full-featured social media application with real-time messaging, post sharing, and user interactions.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with modern web technologies, featuring dark mode and smooth animations.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
]

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

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
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium">My work showcase</span>
            </motion.div>

            <h1 className="text-4xl font-bold mb-4 text-gradient">My Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's a collection of projects I've worked on, showcasing my skills in web development, mobile apps, and
              more.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div key={project.id}>
                  <AnimatedCard delay={index * 0.1} className="overflow-hidden h-full">
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-primary text-primary-foreground rounded text-sm">Featured</span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2 mb-3">
                        <AnimatedButton size="sm" glowColor="blue" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </AnimatedButton>
                        <AnimatedButton variant="outline" size="sm" glowColor="purple" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </AnimatedButton>
                      </div>
                      <AnimatedButton variant="ghost" size="sm" asChild className="w-full">
                        <Link href={`/projects/${project.id}`}>View Details</Link>
                      </AnimatedButton>
                    </CardContent>
                  </AnimatedCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <motion.div key={project.id}>
                  <AnimatedCard delay={index * 0.1} className="overflow-hidden h-full">
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2 mb-3">
                        <AnimatedButton size="sm" glowColor="blue" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </AnimatedButton>
                        <AnimatedButton variant="outline" size="sm" glowColor="purple" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </AnimatedButton>
                      </div>
                      <AnimatedButton variant="ghost" size="sm" asChild className="w-full">
                        <Link href={`/projects/${project.id}`}>View Details</Link>
                      </AnimatedButton>
                    </CardContent>
                  </AnimatedCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
