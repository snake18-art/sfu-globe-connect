
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";

export interface MessageProps {
  content: string;
  timestamp: string;
  sender: {
    name: string;
    avatar: string;
  };
  isOwn?: boolean;
}

export const Message = forwardRef<HTMLDivElement, MessageProps>(
  ({ content, timestamp, sender, isOwn = false }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-start gap-3 mb-4 max-w-[85%] animate-fade-in",
          isOwn ? "self-end flex-row-reverse" : "self-start"
        )}
      >
        {!isOwn && (
          <Avatar className="w-8 h-8">
            <img src={sender.avatar} alt={sender.name} className="object-cover" />
          </Avatar>
        )}
        
        <div>
          <div
            className={cn(
              "px-4 py-3 rounded-lg",
              isOwn
                ? "bg-primary text-white"
                : "bg-white/10 backdrop-blur-sm dark:bg-black/20"
            )}
          >
            {!isOwn && (
              <p className="text-xs font-medium mb-1 text-foreground/70">{sender.name}</p>
            )}
            <p className="text-sm">{content}</p>
          </div>
          <p className="text-xs text-foreground/50 mt-1 ml-1">{timestamp}</p>
        </div>
      </div>
    );
  }
);

Message.displayName = "Message";
