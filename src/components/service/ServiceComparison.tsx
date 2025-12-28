import { Check } from "lucide-react";

interface ComparisonItem {
  feature: string;
  thisService: string;
  alternative: string;
}

interface ServiceComparisonProps {
  comparison: ComparisonItem[];
  serviceName: string;
  alternativeName?: string;
}

const ServiceComparison = ({ comparison, serviceName, alternativeName = "Alternative" }: ServiceComparisonProps) => {
  return (
    <div className="bg-card rounded-xl p-6 md:p-8 border border-border overflow-hidden">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        {serviceName} vs {alternativeName}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[400px]">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-semibold text-foreground">
                Feature
              </th>
              <th className="text-center py-3 px-4 font-semibold text-accent bg-accent/5 rounded-t-lg">
                {serviceName}
              </th>
              <th className="text-center py-3 px-4 font-semibold text-muted-foreground">
                {alternativeName}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((item, index) => (
              <tr 
                key={index}
                className="border-b border-border last:border-0"
              >
                <td className="py-4 px-4 text-foreground font-medium">
                  {item.feature}
                </td>
                <td className="py-4 px-4 text-center bg-accent/5">
                  <span className="inline-flex items-center gap-2 text-foreground">
                    <Check className="w-4 h-4 text-accent" />
                    {item.thisService}
                  </span>
                </td>
                <td className="py-4 px-4 text-center text-muted-foreground">
                  {item.alternative}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceComparison;
