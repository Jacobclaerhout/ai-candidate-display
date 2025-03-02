
import { useState, useRef } from "react";
import { Play, Pause, Video, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface RecordingPlayerProps {
  src?: string;
  posterImage?: string;
  title: string;
  duration?: string;
  className?: string;
}

const RecordingPlayer = ({
  src,
  posterImage,
  title,
  duration = "No duration available",
  className
}: RecordingPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isWatched, setIsWatched] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (!src) return;
    
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
      if (!isWatched) setIsWatched(true);
    }
    
    setIsPlaying(!isPlaying);
  };

  const renderContent = () => {
    if (!src) {
      return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <div className="w-16 h-16 mb-4 rounded-full bg-candidate-light flex items-center justify-center">
            <Video className="w-8 h-8 text-candidate-muted" />
          </div>
          <p className="text-candidate-muted">No recording available</p>
        </div>
      );
    }

    return (
      <>
        <video
          ref={videoRef}
          src={src}
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

  return (
    <div className={cn("candidate-card animate-slide-in overflow-hidden", className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-candidate-accent flex items-center justify-center">
            <Video className="w-4 h-4 text-candidate-secondary" />
          </div>
          <h3 className="font-medium">Interview Recording</h3>
        </div>
        
        {isWatched && (
          <div className="flex items-center gap-1 text-xs text-green-600">
            <Check className="w-3 h-3" />
            <span>Watched</span>
          </div>
        )}
      </div>
      
      <div className="relative aspect-video bg-candidate-light rounded-lg overflow-hidden">
        {renderContent()}
      </div>
      
      <div className="mt-3 flex justify-between items-center">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-candidate-muted">{duration}</p>
      </div>
    </div>
  );
};

export default RecordingPlayer;
