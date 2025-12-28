import { Briefcase, Gift, FileText, Pill, Package, Globe } from "lucide-react";

interface UseCase {
  title: string;
  description: string;
}

interface ServiceUseCasesProps {
  useCases: UseCase[];
}

const iconMap: Record<string, typeof Briefcase> = {
  "E-commerce": Package,
  "Business": Briefcase,
  "Personal": Gift,
  "Medical": Pill,
  "Documents": FileText,
  "International": Globe,
  "Legal": FileText,
  "Event": Gift,
  "Bulk": Package,
  "Fragile": Package,
  "Electronics": Package,
  "Artwork": Gift,
  "Busy": Briefcase,
  "Home": Gift,
  "Regular": Package,
};

const getIcon = (title: string) => {
  for (const key in iconMap) {
    if (title.toLowerCase().includes(key.toLowerCase())) {
      return iconMap[key];
    }
  }
  return Package;
};

const ServiceUseCases = ({ useCases }: ServiceUseCasesProps) => {
  return (
    <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Common Use Cases
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {useCases.map((useCase, index) => {
          const Icon = getIcon(useCase.title);
          return (
            <div 
              key={index}
              className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceUseCases;
