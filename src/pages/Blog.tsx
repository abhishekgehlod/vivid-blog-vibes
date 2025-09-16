import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Technology", "Design", "Lifestyle", "Travel", "Business"];

  const blogPosts = [
    {
      title: "Building Modern Web Applications",
      excerpt: "Learn the fundamentals of creating scalable and maintainable web applications using the latest technologies and best practices.",
      author: "Alex Johnson",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
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
    },
    {
      title: "AI in Business Operations",
      excerpt: "How artificial intelligence is transforming business operations and creating new opportunities for growth.",
      author: "John Smith",
      date: "Mar 5, 2024",
      readTime: "10 min read",
      category: "Business",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    },
    {
      title: "Sustainable Living Guide",
      excerpt: "Practical steps you can take today to live more sustainably and reduce your environmental impact.",
      author: "Lisa Green",
      date: "Mar 3, 2024",
      readTime: "6 min read",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop"
    },
    {
      title: "The Future of UX Design",
      excerpt: "Exploring emerging trends and technologies that will shape the future of user experience design.",
      author: "Tom Wilson",
      date: "Mar 1, 2024",
      readTime: "8 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1558655146-9f40138d4bb7?w=400&h=300&fit=copy"
    },
    {
      title: "JavaScript Performance Tips",
      excerpt: "Advanced techniques to optimize your JavaScript code for better performance and user experience.",
      author: "Alex Johnson",
      date: "Feb 28, 2024",
      readTime: "12 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop"
    },
    {
      title: "Digital Nomad Destinations",
      excerpt: "The best cities around the world for digital nomads, featuring coworking spaces, cost of living, and lifestyle.",
      author: "Emma Wilson",
      date: "Feb 25, 2024",
      readTime: "9 min read",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover insights, tutorials, and stories from our community of writers and experts.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 mb-8 animate-slide-up">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <div 
                  key={`${post.title}-${post.date}`} 
                  className="animate-slide-up" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <BlogCard {...post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filter criteria.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;