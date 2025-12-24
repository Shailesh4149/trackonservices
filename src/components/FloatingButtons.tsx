import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const phoneNumber = "9864251628";
  const whatsappMessage = encodeURIComponent("Hi, I want to enquire about courier services.");

  const handleWhatsAppClick = () => {
    window.open(`https://web.whatsapp.com/send?phone=91${phoneNumber}&text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
      <a
        href={`tel:${phoneNumber}`}
        className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-elevated hover:scale-110 transition-transform animate-pulse"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7 text-accent-foreground" />
      </a>
    </div>
  );
};

export default FloatingButtons;
