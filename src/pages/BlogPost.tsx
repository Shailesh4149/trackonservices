import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Clock, User, Calendar, ArrowLeft, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Breadcrumb from "@/components/seo/Breadcrumb";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { Button } from "@/components/ui/button";
import { getBlogPost, getRelatedPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : null;
  const relatedPosts = slug ? getRelatedPosts(slug, 3) : [];

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Trackon Courier Blog`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", post.metaDescription);
    }
  }, [post]);

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-background pt-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
            <Link to="/blog" className="text-accent hover:underline">← Back to Blog</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-background pt-20">
        <article>
          <header className="py-12 md:py-16 bg-primary/5">
            <div className="container max-w-4xl">
              <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
              <span className="inline-flex px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</span>
              </div>
            </div>
          </header>

          <div className="py-12 md:py-16">
            <div className="container max-w-4xl">
              <div className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-accent">
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/## /g, '<h2 class="text-2xl font-bold mt-8 mb-4 text-foreground">').replace(/### /g, '<h3 class="text-xl font-semibold mt-6 mb-3 text-foreground">').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              </div>

              <div className="mt-12 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Need Courier Services?</h3>
                <p className="text-muted-foreground mb-4">Contact Trackon Courier for fast, reliable delivery across India and worldwide.</p>
                <Button variant="accent" asChild>
                  <a href="tel:9864251628" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call: 9864251628
                  </a>
                </Button>
              </div>

              <RelatedPosts posts={relatedPosts} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default BlogPost;
