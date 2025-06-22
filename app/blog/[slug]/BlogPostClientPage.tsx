"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft, Share2, BookmarkPlus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const blogPosts = {
  "building-scalable-react-applications": {
    title: "Building Scalable React Applications",
    description:
      "Learn the best practices for building large-scale React applications that are maintainable and performant.",
    content: `
# Building Scalable React Applications

Building scalable React applications is crucial for long-term success in modern web development. As applications grow in complexity and team size, having the right architecture and patterns becomes essential.

## Component Architecture

The foundation of any scalable React application is a well-thought-out component architecture. Here are the key principles I follow:

### 1. Component Composition

Instead of building monolithic components, break them down into smaller, reusable pieces. This makes your code more maintainable and testable.

\`\`\`jsx
// Instead of this monolithic component
function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <div className="avatar">
        <img src={user.avatar || "/placeholder.svg"} alt={user.name} />
      </div>
      <div className="info">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div className="stats">
          <span>Posts: {user.postCount}</span>
          <span>Followers: {user.followerCount}</span>
        </div>
      </div>
    </div>
  )
}

// Break it down into smaller components
function Avatar({ src, alt }) {
  return (
    <div className="avatar">
      <img src={src || "/placeholder.svg"} alt={alt} />
    </div>
  )
}

function UserInfo({ name, email }) {
  return (
    <div className="info">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

function UserStats({ postCount, followerCount }) {
  return (
    <div className="stats">
      <span>Posts: {postCount}</span>
      <span>Followers: {followerCount}</span>
    </div>
  )
}

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <Avatar src={user.avatar} alt={user.name} />
      <UserInfo name={user.name} email={user.email} />
      <UserStats postCount={user.postCount} followerCount={user.followerCount} />
    </div>
  )
}
\`\`\`

### 2. Custom Hooks

Extract complex logic into custom hooks to promote reusability and separation of concerns.

\`\`\`jsx
// Custom hook for API calls
function useApi(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}

// Usage in component
function UserList() {
  const { data: users, loading, error } = useApi('/api/users')

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      {users.map(user => (
        <UserProfile key={user.id} user={user} />
      ))}
    </div>
  )
}
\`\`\`

## State Management

For large applications, proper state management is crucial. Here's my approach:

### 1. Local State First

Start with local state and only lift state up when necessary. Not everything needs to be in global state.

### 2. Context for Shared State

Use React Context for state that needs to be shared across multiple components but doesn't require complex updates.

### 3. External Libraries for Complex State

For complex state management needs, consider libraries like Redux Toolkit or Zustand.

## Performance Optimization

Performance is key for scalable applications:

### 1. Code Splitting

Use dynamic imports to split your code and load only what's needed:

\`\`\`jsx
const LazyComponent = lazy(() => import('./LazyComponent'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  )
}
\`\`\`

### 2. Memoization

Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders:

\`\`\`jsx
const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    return data.map(item => expensiveProcessing(item))
  }, [data])

  return <div>{/* render processed data */}</div>
})
\`\`\`

## Testing Strategy

A scalable application needs a comprehensive testing strategy:

1. **Unit Tests**: Test individual components and functions
2. **Integration Tests**: Test how components work together
3. **E2E Tests**: Test complete user workflows

## Conclusion

Building scalable React applications requires careful planning and adherence to best practices. Focus on component composition, proper state management, performance optimization, and comprehensive testing to ensure your application can grow with your needs.

Remember, scalability isn't just about handling more users—it's also about maintaining code quality as your team and codebase grow.
    `,
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "JavaScript", "Architecture", "Performance"],
  },
  "future-of-web-development": {
    title: "The Future of Web Development",
    description: "Exploring upcoming trends and technologies that will shape the future of web development.",
    content: `
# The Future of Web Development

Web development is constantly evolving, and staying ahead of the curve is essential for developers who want to remain relevant and build cutting-edge applications. Let's explore the trends and technologies that are shaping the future of web development.

## AI Integration

Artificial Intelligence is becoming increasingly integrated into web development workflows and applications.

### AI-Powered Development Tools

- **Code Generation**: Tools like GitHub Copilot and ChatGPT are helping developers write code faster
- **Automated Testing**: AI can generate test cases and identify potential bugs
- **Design to Code**: Converting designs to code automatically

### AI in User Experiences

- **Personalization**: Dynamic content based on user behavior
- **Chatbots and Virtual Assistants**: More sophisticated conversational interfaces
- **Predictive UX**: Anticipating user needs and actions

## WebAssembly (WASM)

WebAssembly is enabling near-native performance in web browsers, opening up new possibilities:

- **High-Performance Applications**: Games, video editing, and scientific computing in the browser
- **Language Diversity**: Write web applications in languages like Rust, C++, and Go
- **Legacy Code Migration**: Bring existing applications to the web

## Edge Computing

Moving computation closer to users for better performance:

- **Edge Functions**: Run code at the edge for faster response times
- **CDN Evolution**: Content delivery networks becoming compute platforms
- **Reduced Latency**: Better user experiences globally

## Progressive Web Apps (PWAs) Evolution

PWAs continue to bridge the gap between web and native applications:

- **Advanced Capabilities**: Access to device features like camera, GPS, and sensors
- **Offline-First**: Better offline experiences and data synchronization
- **App Store Distribution**: PWAs in app stores alongside native apps

## Serverless and JAMstack

The trend toward serverless architectures continues:

- **Function-as-a-Service**: Event-driven, scalable backend functions
- **Static Site Generation**: Pre-built sites for better performance and security
- **Headless CMS**: Decoupled content management systems

## Web3 and Blockchain

Decentralized web technologies are gaining traction:

- **Decentralized Applications (dApps)**: Applications running on blockchain networks
- **NFTs and Digital Assets**: Integration of blockchain-based assets
- **Decentralized Identity**: User-controlled identity and data

## Micro-Frontends

Breaking down frontend monoliths:

- **Independent Deployment**: Teams can deploy features independently
- **Technology Diversity**: Different parts of an application can use different frameworks
- **Scalable Teams**: Better organization for large development teams

## Conclusion

The future of web development is exciting and full of possibilities. While it's impossible to predict exactly what will happen, these trends give us a good indication of where the industry is heading.

As developers, it's important to stay curious, keep learning, and experiment with new technologies while maintaining a solid foundation in web fundamentals.
    `,
    image: "/placeholder.svg?height=400&width=800",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Technology",
    tags: ["Web Development", "AI", "WebAssembly", "Future"],
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostClientPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <article>
            <header className="mb-8">
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{post.description}</p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <BookmarkPlus className="h-4 w-4 mr-2" />
                  Bookmark
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            {/* Article Content */}
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {post.content.split("\n").map((line, index) => {
                if (line.startsWith("# ")) {
                  return (
                    <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                      {line.slice(2)}
                    </h1>
                  )
                }
                if (line.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-6 mb-3">
                      {line.slice(3)}
                    </h2>
                  )
                }
                if (line.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-4 mb-2">
                      {line.slice(4)}
                    </h3>
                  )
                }
                if (line.startsWith("```")) {
                  return null // Handle code blocks separately if needed
                }
                if (line.trim() === "") {
                  return <br key={index} />
                }
                return (
                  <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                    {line}
                  </p>
                )
              })}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Author Card */}
          <Card className="mt-12">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  P
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Priyav</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Full Stack Developer passionate about creating digital experiences that matter. I write about web
                    development, technology trends, and share insights from my journey.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/about">Learn More</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/blog">More Posts</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
