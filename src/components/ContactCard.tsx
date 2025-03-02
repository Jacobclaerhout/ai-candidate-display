
import { User, Mail, Phone, MapPin, Briefcase, Download, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface ContactCardProps {
  name: string;
  email?: string;
  phone?: string;
  location?: string;
  position?: string;
  resumeUrl?: string;
  className?: string;
}

const ContactCard = ({
  name,
  email,
  phone,
  location,
  position,
  resumeUrl,
  className
}: ContactCardProps) => {
  
  const handleShare = () => {
    // Copy a link to the current page to clipboard
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast.success("Profile link copied to clipboard");
      })
      .catch((error) => {
        toast.error("Failed to copy link");
        console.error("Failed to copy link:", error);
      });
  };

  return (
    <div className={cn("candidate-card animate-scale-in", className)}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-candidate-accent flex items-center justify-center">
          <User className="w-6 h-6 text-candidate-secondary" />
        </div>
        <div>
          <h3 className="font-medium text-lg">{name}</h3>
          {position && (
            <div className="highlight-chip mt-1">{position}</div>
          )}
        </div>
      </div>
      
      <button 
        onClick={handleShare} 
        className="flex items-center gap-2 text-sm text-candidate-secondary hover:text-candidate-primary transition-colors mb-2 p-2 bg-candidate-accent/40 rounded-md w-full"
      >
        <Share2 className="w-4 h-4" />
        <span>Share Profile</span>
      </button>
      
      {resumeUrl && (
        <a 
          href={resumeUrl} 
          className="flex items-center gap-2 text-sm text-candidate-secondary hover:text-candidate-primary transition-colors mb-4 p-2 bg-candidate-accent/40 rounded-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download className="w-4 h-4" />
          <span>Download Resume</span>
        </a>
      )}
      
      <div className="space-y-3">
        {email && (
          <a href={`mailto:${email}`} className="contact-item">
            <Mail className="w-4 h-4" />
            <span>{email}</span>
          </a>
        )}
        
        {phone && (
          <a href={`tel:${phone}`} className="contact-item">
            <Phone className="w-4 h-4" />
            <span>{phone}</span>
          </a>
        )}
        
        {location && (
          <div className="contact-item">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        )}
        
        {position && (
          <div className="contact-item">
            <Briefcase className="w-4 h-4" />
            <span>{position}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
