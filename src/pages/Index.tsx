import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Star } from "lucide-react";

const Index = () => {
  const featuredPosts = [
    {
      title: "Building Modern Web Applications",
      excerpt: "Learn the fundamentals of creating scalable and maintainable web applications using the latest technologies and best practices.",
      author: "Alex Johnson",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      featured: true
    },
    {
      title: "The Art of Minimalist Design",
      excerpt: "Discover how minimalist design principles can enhance user experience and create more impactful digital products.",
      author: "Sarah Chen",
      date: "Mar 12, 2024",
      readTime: "5 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      title: "Remote Work Best Practices",
      excerpt: "Essential tips and strategies for maintaining productivity and work-life balance in a remote work environment.",
      author: "Mike Davis",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    },
    {
      title: "Travel Photography Tips",
      excerpt: "Capture stunning travel moments with these professional photography techniques and composition secrets.",
      author: "Emma Wilson",
      date: "Mar 8, 2024",
      readTime: "7 min read",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop"
    }
  ];

  const stats = [
    { icon: BookOpen, label: "Articles Published", value: "150+" },
    { icon: Users, label: "Active Readers", value: "10K+" },
    { icon: Star, label: "5-Star Reviews", value: "500+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Carousel */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome to BlogSpace
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover amazing stories, insights, and ideas from passionate writers around the world. 
              Join our community of readers and creators.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Start Reading
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="animate-slide-up">
            <Carousel />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular and thought-provoking articles, carefully curated for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
            {featuredPosts.map((post, index) => (
              <div key={post.title} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogCard {...post} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 py-3">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
