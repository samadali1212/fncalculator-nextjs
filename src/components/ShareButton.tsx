import { useState, ReactNode } from "react";
import { Share2, Copy, MessageCircle, Facebook, Twitter, Mail, Link } from "lucide-react";
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
  text?: string;
  url?: string;
  className?: string;
  children?: ReactNode;
  variant?: "default" | "outline" | "ghost" | "secondary" | "link" | "destructive";
}

const ShareButton = ({
  title,
  text,
  url,
  className,
  children,
  variant = "outline"
}: ShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const shareableUrl = url || window.location.href;
  const shareText = text || title;
  
  const shareOptions = [
    {
      name: "Copy Link",
      icon: Copy,
      color: "text-gray-600",
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
      icon: MessageCircle,
      color: "text-green-600",
      action: () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(`${shareText} - ${shareableUrl}`)}`, "_blank");
        setIsOpen(false);
      }
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "text-blue-600",
      action: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareableUrl)}&quote=${encodeURIComponent(shareText)}`, "_blank");
        setIsOpen(false);
      }
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "text-blue-400",
      action: () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareableUrl)}`, "_blank");
        setIsOpen(false);
      }
    },
    {
      name: "Email",
      icon: Mail,
      color: "text-gray-600",
      action: () => {
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${shareText} - ${shareableUrl}`)}`, "_blank");
        setIsOpen(false);
      }
    },
    {
      name: "Share via...",
      icon: Link,
      color: "text-indigo-600",
      action: async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: title,
              text: shareText,
              url: shareableUrl,
            });
            setIsOpen(false);
          } catch (error) {
            console.log('Error sharing:', error);
          }
        } else {
          toast.info("Native sharing not supported on this device");
        }
      }
    }
  ];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant={variant} 
          size="sm" 
          className={cn("flex items-center gap-2 transition-all hover:scale-105", className)}
          aria-label="Share this page"
        >
          {children || (
            <>
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3" align="end">
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-gray-900 mb-3">Share this tool</h4>
          {shareOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <Button 
                key={option.name} 
                variant="ghost" 
                className="w-full justify-start text-sm h-auto py-2.5 hover:bg-gray-50" 
                onClick={option.action}
              >
                <IconComponent className={`h-4 w-4 mr-3 ${option.color}`} />
                <span className="text-gray-700">{option.name}</span>
              </Button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShareButton;
