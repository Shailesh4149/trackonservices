import { Link } from "react-router-dom";
import { Clock, ArrowRight, User, Calendar } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  if (featured) {
    return (
      <article className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-elevated transition-all">
        <Link to={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/9] bg-secondary overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        </div>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-IN', { 
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 text-accent font-semibold group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-elevated transition-all h-full flex flex-col">
      <Link to={`/blog/${post.slug}`} className="block flex-1 flex flex-col">
        <div className="aspect-[16/9] bg-secondary overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            <span className="inline-flex items-center px-2 py-0.5 bg-accent/10 text-accent rounded-full font-medium">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
            <span>
              {new Date(post.date).toLocaleDateString('en-IN', { 
                day: 'numeric', 
                month: 'short', 
                year: 'numeric' 
              })}
            </span>
            <span className="inline-flex items-center gap-1 text-accent font-semibold">
              Read <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
