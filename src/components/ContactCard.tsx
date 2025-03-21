
import { User, Mail, Phone, MapPin, Briefcase, Download, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
    <Card className={cn("animate-scale-in", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
            <User className="w-6 h-6 text-slate-600" />
          </div>
          <div>
            <h3 className="font-medium text-lg">{name}</h3>
            {position && (
              <div className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs rounded-full inline-block mt-1">{position}</div>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <Button 
          onClick={handleShare} 
          variant="outline"
          size="sm"
          className="w-full"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share Profile
        </Button>
        
        {resumeUrl && (
          <Button 
            variant="outline"
            size="sm"
            className="w-full"
            asChild
          >
            <a 
              href={resumeUrl}  
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>
        )}
        
        <Separator />
        
        <div className="space-y-3 pt-2">
          {email && (
            <a href={`mailto:${email}`} className="flex items-center text-sm hover:text-slate-900">
              <Mail className="w-4 h-4 mr-3 text-slate-500" />
              <span>{email}</span>
            </a>
          )}
          
          {phone && (
            <a href={`tel:${phone}`} className="flex items-center text-sm hover:text-slate-900">
              <Phone className="w-4 h-4 mr-3 text-slate-500" />
              <span>{phone}</span>
            </a>
          )}
          
          {location && (
            <div className="flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-3 text-slate-500" />
              <span>{location}</span>
            </div>
          )}
          
          {position && (
            <div className="flex items-center text-sm">
              <Briefcase className="w-4 h-4 mr-3 text-slate-500" />
              <span>{position}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
