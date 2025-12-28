import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface RelatedPostsProps {
  posts: BlogPost[];
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (posts.length === 0) return null;

  return (
    <div className="border-t border-border pt-12 mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Related Articles
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group bg-card rounded-lg p-5 border border-border hover:shadow-card hover:border-accent/30 transition-all"
          >
            <span className="inline-flex px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full font-medium mb-3">
              {post.category}
            </span>
            <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {post.excerpt}
            </p>
            <span className="inline-flex items-center gap-1 text-sm text-accent font-medium">
              Read More <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
