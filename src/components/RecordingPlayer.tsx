
import { useState, useRef } from "react";
import { Play, Pause, Video, Check, Film } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface RecordingPlayerProps {
  src?: string;
  prescreeningSrc?: string;
  posterImage?: string;
  title: string;
  duration?: string;
  className?: string;
}

const RecordingPlayer = ({
  src,
  prescreeningSrc,
  posterImage,
  title,
  duration = "No duration available",
  className
}: RecordingPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isWatched, setIsWatched] = useState(false);
  const [activeVideo, setActiveVideo] = useState<"intro" | "prescreening">("intro");
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    const currentSrc = activeVideo === "intro" ? src : prescreeningSrc;
    if (!currentSrc) return;
    
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
      if (!isWatched) setIsWatched(true);
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
  };

  const renderContent = () => {
    const currentSrc = activeVideo === "intro" ? src : prescreeningSrc;
    
    if (!currentSrc) {
      return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <div className="w-16 h-16 mb-4 rounded-full bg-candidate-light flex items-center justify-center">
            <Video className="w-8 h-8 text-candidate-muted" />
          </div>
          <p className="text-candidate-muted">
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
          className="w-full h-full object-cover rounded-lg"
          onEnded={() => setIsPlaying(false)}
        />
        
        <button
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300",
            isPlaying && !isHovering ? "opacity-0" : "opacity-100"
          )}
          onClick={handlePlayPause}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110">
            {isPlaying ? 
              <Pause className="w-6 h-6 text-candidate-primary" /> : 
              <Play className="w-6 h-6 ml-1 text-candidate-primary" />}
          </div>
        </button>
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
      ? <Video className="w-5 h-5 text-candidate-secondary" />
      : <Film className="w-5 h-5 text-candidate-secondary" />;
  };

  return (
    <div className={cn("candidate-card animate-slide-in overflow-hidden", className)}>
      <Tabs defaultValue="intro" onValueChange={handleTabChange} className="w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-candidate-accent flex items-center justify-center">
              {getVideoIcon(activeVideo)}
            </div>
            <h3 className="font-medium">{getVideoType(activeVideo)}</h3>
          </div>
          
          <TabsList className="bg-candidate-light">
            <TabsTrigger value="intro" className="text-xs">Introduction</TabsTrigger>
            <TabsTrigger value="prescreening" className="text-xs">Pre-screening</TabsTrigger>
          </TabsList>
          
          {isWatched && (
            <div className="flex items-center gap-1 text-xs text-green-600">
              <Check className="w-3 h-3" />
              <span>Watched</span>
            </div>
          )}
        </div>
        
        <TabsContent value="intro" className="mt-0">
          <div className="relative aspect-video bg-candidate-light rounded-lg overflow-hidden">
            {renderContent()}
          </div>
        </TabsContent>
        
        <TabsContent value="prescreening" className="mt-0">
          <div className="relative aspect-video bg-candidate-light rounded-lg overflow-hidden">
            {renderContent()}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-3 flex justify-between items-center">
        <span className="text-xs text-candidate-muted">{duration}</span>
      </div>
    </div>
  );
};

export default RecordingPlayer;
