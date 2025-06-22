import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Blog() {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      description:
        "Learn the best practices for building large-scale React applications that are maintainable and performant.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-15",
      readTime: "8 min read",
      slug: "building-scalable-react-applications",
    },
    {
      title: "The Future of Web Development",
      description: "Exploring upcoming trends and technologies that will shape the future of web development.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-10",
      readTime: "6 min read",
      slug: "future-of-web-development",
    },
    {
      title: "Mastering TypeScript",
      description: "A comprehensive guide to TypeScript features and how to leverage them in your projects.",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-05",
      readTime: "12 min read",
      slug: "mastering-typescript",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I write about web development, technology trends, and share insights from my journey as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
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

        <div className="text-center">
          <Button variant="outline" asChild>
            <a href="/blog">View All Posts</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
