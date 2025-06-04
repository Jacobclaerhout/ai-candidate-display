
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RequirementsModalProps {
  isOpen: boolean;
  onComplete: (requirements: string, email: string) => void;
}

const RequirementsModal = ({ isOpen, onComplete }: RequirementsModalProps) => {
  const [step, setStep] = useState(1);
  const [requirements, setRequirements] = useState("");
  const [email, setEmail] = useState("");

  const handleNext = () => {
    if (step === 1 && requirements.trim()) {
      setStep(2);
    } else if (step === 2 && email.trim()) {
      onComplete(requirements, email);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {step === 1 ? "Share What You're Looking For" : "Your Email Address"}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {step === 1 ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="requirements">
                  Paste your job description or requirements
                </Label>
                <Textarea
                  id="requirements"
                  placeholder="Paste your job description, requirements, or what you're looking for in a candidate..."
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  rows={6}
                  className="resize-none"
                />
              </div>
              <Button 
                onClick={handleNext} 
                className="w-full"
                disabled={!requirements.trim()}
              >
                Next
              </Button>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="email">
                  Enter your email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={handleBack} className="flex-1">
                  Back
                </Button>
                <Button 
                  onClick={handleNext} 
                  className="flex-1"
                  disabled={!email.trim()}
                >
                  Find Candidates
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RequirementsModal;
