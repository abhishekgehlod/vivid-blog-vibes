import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Star } from "lucide-react";

const Index = () => {
  const featuredPosts = [
    {
      title: "The Art of Draping: Mastering Fabric Flow",
      excerpt:
        "Explore the fundamental techniques of draping that transform flat fabric into stunning three-dimensional fashion pieces.",
      author: "Isabella Martinez",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      category: "Techniques",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop",
      featured: true,
    },
    {
      title: "Minimalist Fashion: Less is More",
      excerpt:
        "Discover how minimalist design principles create timeless, elegant pieces that transcend seasonal trends.",
      author: "Sophie Laurent",
      date: "Mar 12, 2024",
      readTime: "5 min read",
      category: "Style",
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
    },
    {
      title: "Color Psychology in Fashion",
      excerpt:
        "Understanding how colors influence emotions and perceptions in fashion design and personal styling choices.",
      author: "David Kim",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      category: "Psychology",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
    },
    {
      title: "Street Style Photography",
      excerpt:
        "Capturing authentic fashion moments and street style inspiration from fashion capitals around the world.",
      author: "Maya Patel",
      date: "Mar 8, 2024",
      readTime: "7 min read",
      category: "Photography",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop",
    },
  ];

  const stats = [
    { icon: BookOpen, label: "Fashion Articles", value: "150+" },
    { icon: Users, label: "Fashion Enthusiasts", value: "10K+" },
    { icon: Star, label: "Designer Features", value: "500+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Carousel */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Fashion Design Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore the latest fashion trends, designer insights, and style
              inspirations from the world's most creative minds. Join our
              community of fashion enthusiasts and industry professionals.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              Explore Fashion
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* <div className="animate-slide-up">
            <Carousel />
          </div> */}
        </div>
      </section>

      {/* carousel section */}
      <section className="w-full pb-20 px-6">
        <div className="animate-slide-up">
          <Carousel />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Fashion Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most inspiring fashion articles, from design
              techniques to industry insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
            {featuredPosts.map((post, index) => (
              <div
                key={post.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogCard {...post} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 py-3">
              View All Fashion Stories
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
