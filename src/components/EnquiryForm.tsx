import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const EnquiryForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickupLocation: "",
    deliveryLocation: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message for WhatsApp
    const whatsappMessage = `*New Quote Request*

*Name:* ${formData.name.trim()}
*Phone:* ${formData.phone.trim()}
*Email:* ${formData.email.trim() || "Not provided"}
*Pickup Location:* ${formData.pickupLocation.trim()}
*Delivery Location:* ${formData.deliveryLocation.trim()}
*Package Details:* ${formData.message.trim() || "Not specified"}`;

    // WhatsApp business number
    const whatsappNumber = "918097512951"; // Format: country code + number without +
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Opening WhatsApp",
      description: "Complete your enquiry in WhatsApp.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      pickupLocation: "",
      deliveryLocation: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div id="enquiry" className="bg-card rounded-2xl shadow-elevated p-6 md:p-8 animate-fade-in">
      <div className="space-y-2 mb-6">
        <h2 className="text-2xl font-bold text-foreground">Get Free Quote</h2>
        <p className="text-muted-foreground">Fill the form & we'll call you back</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          required
          className="h-12"
        />
        <Input
          name="phone"
          type="tel"
          placeholder="Mobile Number *"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          className="h-12"
        />
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="h-12"
        />
        <Input
          name="pickupLocation"
          placeholder="Pickup Location *"
          value={formData.pickupLocation}
          onChange={handleChange}
          required
          className="h-12"
        />
        <Input
          name="deliveryLocation"
          placeholder="Delivery Location *"
          value={formData.deliveryLocation}
          onChange={handleChange}
          required
          className="h-12"
        />
        <Textarea
          name="message"
          placeholder="Package Details (optional)"
          value={formData.message}
          onChange={handleChange}
          rows={3}
        />
        <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              <Send className="w-5 h-5" />
              Get Quote Now
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <CheckCircle className="w-4 h-4 text-accent" />
        <span>Response within 30 minutes</span>
      </div>
    </div>
  );
};

export default EnquiryForm;
