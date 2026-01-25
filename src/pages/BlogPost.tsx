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

// Simple markdown parser for blog content
const parseMarkdown = (content: string): string => {
  return content
    // Parse headers (must come before other replacements)
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // Parse bold text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Parse tables
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(cell => cell.trim());
      const isHeader = cells.some(cell => cell.includes('---'));
      if (isHeader) return '';
      return '<tr>' + cells.map(cell => `<td>${cell.trim()}</td>`).join('') + '</tr>';
    })
    // Wrap table rows
    .replace(/(<tr>.*<\/tr>\n?)+/g, '<table>$&</table>')
    // Parse unordered lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    // Parse ordered lists
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    // Parse paragraphs (lines that aren't already wrapped)
    .replace(/^(?!<[hulo]|<li|<tr|<table)(.+)$/gm, '<p>$1</p>')
    // Clean up empty paragraphs and extra breaks
    .replace(/<p><\/p>/g, '')
    .replace(/<p>\s*<\/p>/g, '')
    .replace(/\n{2,}/g, '\n');
};

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
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed
                [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-foreground
                [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-foreground
                [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_p]:font-normal
                [&_strong]:text-foreground [&_strong]:font-semibold
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:text-muted-foreground
                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:text-muted-foreground
                [&_li]:mb-2 [&_li]:font-normal
                [&_a]:text-accent [&_a]:underline
                [&_table]:w-full [&_table]:border-collapse [&_table]:mb-6
                [&_th]:border [&_th]:border-border [&_th]:p-3 [&_th]:bg-secondary [&_th]:text-foreground [&_th]:font-semibold [&_th]:text-left
                [&_td]:border [&_td]:border-border [&_td]:p-3 [&_td]:text-muted-foreground [&_td]:font-normal">
                <div dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }} />
              </div>

              <div className="mt-12 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <h3 className="text-xl font-bold text-foreground mb-2">Need Courier Services?</h3>
                <p className="text-muted-foreground mb-4">Contact Trackon Courier for fast, reliable delivery across India and worldwide.</p>
                <Button variant="accent" asChild>
                  <a href="tel:8097512951" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call: 8097512951
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
