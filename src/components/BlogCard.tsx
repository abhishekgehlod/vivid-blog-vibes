import { Calendar, User, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const BlogCard = ({ 
  title, 
  excerpt, 
  author, 
  date, 
  readTime, 
  category, 
  image, 
  featured = false 
}: BlogCardProps) => {
  return (
    <Card className={`card-hover cursor-pointer group ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
            featured ? 'h-64 md:h-80' : 'h-48'
          }`}
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-primary text-primary-foreground">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <h3 className={`font-bold leading-tight group-hover:text-primary transition-colors ${
          featured ? 'text-2xl md:text-3xl' : 'text-lg'
        }`}>
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className={`text-muted-foreground mb-4 ${
          featured ? 'text-base md:text-lg' : 'text-sm'
        }`}>
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;