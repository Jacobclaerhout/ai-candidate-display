
import { user, mail, phone, mapPin, briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactCardProps {
  name: string;
  email?: string;
  phone?: string;
  location?: string;
  position?: string;
  className?: string;
}

const ContactCard = ({
  name,
  email,
  phone,
  location,
  position,
  className
}: ContactCardProps) => {
  return (
    <div className={cn("candidate-card animate-scale-in", className)}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-candidate-accent flex items-center justify-center">
          {user({ className: "w-6 h-6 text-candidate-secondary" })}
        </div>
        <div>
          <h3 className="font-medium text-lg">{name}</h3>
          {position && (
            <div className="highlight-chip mt-1">{position}</div>
          )}
        </div>
      </div>
      
      <div className="space-y-3">
        {email && (
          <a href={`mailto:${email}`} className="contact-item">
            {mail({ className: "w-4 h-4" })}
            <span>{email}</span>
          </a>
        )}
        
        {phone && (
          <a href={`tel:${phone}`} className="contact-item">
            {phone({ className: "w-4 h-4" })}
            <span>{phone}</span>
          </a>
        )}
        
        {location && (
          <div className="contact-item">
            {mapPin({ className: "w-4 h-4" })}
            <span>{location}</span>
          </div>
        )}
        
        {position && (
          <div className="contact-item">
            {briefcase({ className: "w-4 h-4" })}
            <span>{position}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
