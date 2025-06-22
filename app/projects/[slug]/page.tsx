import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const projects = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution built with modern web technologies.",
    longDescription: `This full-stack e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. The project showcases advanced React patterns, secure payment processing, and scalable backend architecture.

The platform includes features like user authentication, product catalog management, shopping cart functionality, order processing, and an admin dashboard for managing the entire system.`,
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT", "Redux", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Stripe payment integration",
      "Order management system",
      "Admin dashboard",
      "Responsive design",
      "Email notifications",
    ],
    challenges: [
      "Implementing secure payment processing with Stripe",
      "Building a scalable product search system",
      "Optimizing performance for large product catalogs",
      "Creating a responsive design that works across all devices",
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  "task-management-app": {
    title: "Task Management App",
    description: "A collaborative task management application with real-time features.",
    longDescription: `A modern task management application designed for teams to collaborate effectively. Built with Next.js and featuring real-time updates, drag-and-drop functionality, and comprehensive project management tools.

The application allows teams to create projects, assign tasks, track progress, and communicate in real-time, making it an ideal solution for agile development teams and project managers.`,
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind CSS", "Prisma", "NextAuth", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Real-time collaboration",
      "Drag-and-drop task management",
      "Project and team management",
      "Task assignment and tracking",
      "File attachments",
      "Comment system",
      "Progress tracking",
      "Email notifications",
    ],
    challenges: [
      "Implementing real-time updates with Socket.io",
      "Building intuitive drag-and-drop interfaces",
      "Managing complex state across multiple components",
      "Ensuring data consistency in real-time environment",
    ],
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Priyav`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
            <div className="flex gap-4">
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Project</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {project.longDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Technical Challenges</h2>
                <div className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Project Links */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Project Links</h3>
                  <div className="space-y-3">
                    <Button className="w-full" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
