import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BlogCard from "@/components/blog/BlogCard";
import Breadcrumb from "@/components/seo/Breadcrumb";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  useEffect(() => {
    document.title = "Courier & Logistics Blog | Tips & Guides | Trackon Courier";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Read expert tips on courier services, shipping guides, logistics efficiency, and more. Stay updated with Trackon Courier's blog.");
    }
  }, []);

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container">
            <Breadcrumb items={[{ label: "Blog" }]} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Courier & Logistics Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Expert tips, guides, and insights on courier services, shipping best practices, and logistics efficiency.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-xl font-bold text-foreground mb-6">Featured Article</h2>
            <BlogCard post={featuredPost} featured />
            
            <h2 className="text-xl font-bold text-foreground mt-12 mb-6">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Blog;
