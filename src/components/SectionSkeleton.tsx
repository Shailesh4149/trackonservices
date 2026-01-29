const SectionSkeleton = () => (
  <div className="py-16 animate-pulse">
    <div className="container">
      <div className="h-8 bg-muted rounded w-1/3 mx-auto mb-4" />
      <div className="h-4 bg-muted rounded w-2/3 mx-auto mb-8" />
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 bg-muted rounded-xl" />
        ))}
      </div>
    </div>
  </div>
);

export default SectionSkeleton;
