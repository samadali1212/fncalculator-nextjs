
import { useState } from "react";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface ShareButtonProps {
  title: string;
  url?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "secondary" | "link" | "destructive";
}

const ShareButton = ({
  title,
  url,
  className,
  variant = "ghost"
}: ShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const shareableUrl = url || window.location.href;
  
  const shareOptions = [
    {
      name: "Copy Link",
      action: async () => {
        try {
          await navigator.clipboard.writeText(shareableUrl);
          toast.success("Link copied to clipboard");
          setIsOpen(false);
        } catch (error) {
          toast.error("Failed to copy link");
        }
      }
    },
    {
      name: "WhatsApp",
      action: () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(`${title} - ${shareableUrl}`)}`, "_blank");
        setIsOpen(false);
      }
    },
    {
      name: "Facebook",
      action: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareableUrl)}`, "_blank");
        setIsOpen(false);
      }
    },
    {
      name: "Twitter",
      action: () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareableUrl)}`, "_blank");
        setIsOpen(false);
      }
    },
    {
      name: "LinkedIn",
      action: () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareableUrl)}`, "_blank");
        setIsOpen(false);
      }
    },
    {
      name: "Email",
      action: () => {
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this link: ${shareableUrl}`)}`, "_blank");
        setIsOpen(false);
      }
    }
  ];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant={variant} 
          size="sm" 
          className={cn("flex items-center gap-1.5", className)}
          aria-label="Share"
        >
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2" align="end">
        <div className="space-y-1">
          {shareOptions.map((option) => (
            <Button 
              key={option.name} 
              variant="ghost" 
              className="w-full justify-start text-sm" 
              onClick={option.action}
            >
              {option.name}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShareButton;
