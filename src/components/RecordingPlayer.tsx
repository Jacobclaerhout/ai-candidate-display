
import { useState, useRef } from "react";
import { Play, Pause, Video, Film, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"; 
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface RecordingPlayerProps {
  src?: string;
  prescreeningSrc?: string;
  posterImage?: string;
  title: string;
  duration?: string;
  className?: string;
  introTranscript?: string;
  prescreeningTranscript?: string;
}

const RecordingPlayer = ({
  src,
  prescreeningSrc,
  posterImage,
  title,
  duration = "No duration available",
  className,
  introTranscript = "No transcript available for this video.",
  prescreeningTranscript = "No transcript available for this pre-screening call."
}: RecordingPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [activeVideo, setActiveVideo] = useState<"intro" | "prescreening">("intro");
  const [showTranscript, setShowTranscript] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    const currentSrc = activeVideo === "intro" ? src : prescreeningSrc;
    if (!currentSrc) return;
    
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    
    setIsPlaying(!isPlaying);
  };

  const handleTabChange = (value: string) => {
    // Pause current video if playing
    if (isPlaying && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setActiveVideo(value as "intro" | "prescreening");
    // Reset transcript visibility when changing tabs
    setShowTranscript(false);
  };

  const getCurrentTranscript = () => {
    return activeVideo === "intro" ? introTranscript : prescreeningTranscript;
  };

  const renderContent = () => {
    const currentSrc = activeVideo === "intro" ? src : prescreeningSrc;
    
    if (!currentSrc) {
      return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <div className="w-16 h-16 mb-4 rounded-full bg-slate-100 flex items-center justify-center">
            <Video className="w-8 h-8 text-slate-400" />
          </div>
          <p className="text-slate-500">
            {activeVideo === "intro" ? "No introduction video available" : "No pre-screening call available"}
          </p>
        </div>
      );
    }

    return (
      <>
        <video
          ref={videoRef}
          src={currentSrc}
          poster={posterImage}
          className="w-full h-full object-cover rounded-md"
          onEnded={() => setIsPlaying(false)}
        />
        
        <Button
          variant="ghost"
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-black/30 rounded-md hover:bg-black/40 transition-opacity duration-300",
            isPlaying && !isHovering ? "opacity-0" : "opacity-100"
          )}
          onClick={handlePlayPause}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110">
            {isPlaying ? 
              <Pause className="w-6 h-6 text-slate-900" /> : 
              <Play className="w-6 h-6 ml-1 text-slate-900" />}
          </div>
        </Button>
      </>
    );
  };

  const getVideoType = (type: "intro" | "prescreening") => {
    return type === "intro" 
      ? "Video Introduction" 
      : "Pre-screening Call";
  };

  const getVideoIcon = (type: "intro" | "prescreening") => {
    return type === "intro" 
      ? <Video className="w-5 h-5 text-slate-600" />
      : <Film className="w-5 h-5 text-slate-600" />;
  };

  return (
    <Card className={cn("animate-slide-in", className)}>
      <Tabs defaultValue="intro" onValueChange={handleTabChange} className="w-full">
        <CardHeader className="pb-2 pt-4 px-4 flex flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
              {getVideoIcon(activeVideo)}
            </div>
            <h3 className="font-medium">{getVideoType(activeVideo)}</h3>
          </div>
          
          <TabsList className="bg-slate-100">
            <TabsTrigger value="intro" className="text-xs">Introduction</TabsTrigger>
            <TabsTrigger value="prescreening" className="text-xs">Pre-screening</TabsTrigger>
          </TabsList>
        </CardHeader>
        
        <CardContent className="p-4 pt-0">
          <TabsContent value="intro" className="mt-0">
            <div className="relative aspect-video bg-slate-100 rounded-md overflow-hidden">
              {renderContent()}
            </div>
          </TabsContent>
          
          <TabsContent value="prescreening" className="mt-0">
            <div className="relative aspect-video bg-slate-100 rounded-md overflow-hidden">
              {renderContent()}
            </div>
          </TabsContent>
          
          <Collapsible
            open={showTranscript}
            onOpenChange={setShowTranscript}
            className="mt-4 border rounded-md overflow-hidden"
          >
            <div className="flex justify-between items-center p-3 bg-slate-50">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-slate-600" />
                <span className="text-sm font-medium">Transcript</span>
              </div>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  {showTranscript ? "Hide" : "Show"}
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <div className="p-4 text-sm bg-white border-t max-h-40 overflow-y-auto">
                <p className="whitespace-pre-line">{getCurrentTranscript()}</p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
        
        <CardFooter className="pt-0 pb-3 px-4">
          <span className="text-xs text-muted-foreground">{duration}</span>
        </CardFooter>
      </Tabs>
    </Card>
  );
};

export default RecordingPlayer;
