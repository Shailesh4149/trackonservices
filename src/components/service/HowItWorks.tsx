interface Step {
  step: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
  serviceName: string;
}

const HowItWorks = ({ steps, serviceName }: HowItWorksProps) => {
  return (
    <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6">
        How {serviceName} Works
      </h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.step} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-accent-gradient flex items-center justify-center text-accent-foreground font-bold">
                {step.step}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-12 bg-border mx-auto mt-2" />
              )}
            </div>
            <div className="flex-1 pb-4">
              <h3 className="font-semibold text-foreground text-lg mb-1">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
