import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      description:
        "Learn the best practices for building large-scale React applications that are maintainable and performant. We'll cover component architecture, state management, and optimization techniques.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-15",
      readTime: "8 min read",
      slug: "building-scalable-react-applications",
      category: "React",
    },
    {
      title: "The Future of Web Development",
      description:
        "Exploring upcoming trends and technologies that will shape the future of web development. From AI integration to new frameworks and tools.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-10",
      readTime: "6 min read",
      slug: "future-of-web-development",
      category: "Technology",
    },
    {
      title: "Mastering TypeScript",
      description:
        "A comprehensive guide to TypeScript features and how to leverage them in your projects. Advanced types, generics, and best practices.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-05",
      readTime: "12 min read",
      slug: "mastering-typescript",
      category: "TypeScript",
    },
    {
      title: "Modern CSS Techniques",
      description:
        "Discover the latest CSS features and techniques that will improve your styling workflow and create better user experiences.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2023-12-28",
      readTime: "7 min read",
      slug: "modern-css-techniques",
      category: "CSS",
    },
    {
      title: "API Design Best Practices",
      description:
        "Learn how to design robust, scalable APIs that are easy to use and maintain. RESTful principles and GraphQL considerations.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2023-12-20",
      readTime: "10 min read",
      slug: "api-design-best-practices",
      category: "Backend",
    },
    {
      title: "Performance Optimization Tips",
      description:
        "Essential techniques for optimizing web application performance. From bundle splitting to image optimization and caching strategies.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2023-12-15",
      readTime: "9 min read",
      slug: "performance-optimization-tips",
      category: "Performance",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, technology, and my journey as a developer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-primary text-primary-foreground rounded text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto" asChild>
                    <a href={`/blog/${post.slug}`} className="flex items-center gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
