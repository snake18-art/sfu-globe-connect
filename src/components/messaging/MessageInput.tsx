
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizontal, Paperclip, Smile } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

export const MessageInput = ({ onSendMessage, isLoading = false }: MessageInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
      <div className="flex items-end gap-2">
        <div className="relative flex-1">
          <Textarea
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[60px] resize-none bg-white/5 dark:bg-black/20 border-white/10 focus-visible:ring-primary"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <div className="absolute bottom-2 left-3 flex gap-2">
            <button
              type="button"
              className="text-foreground/50 hover:text-primary transition-colors"
            >
              <Paperclip className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="text-foreground/50 hover:text-primary transition-colors"
            >
              <Smile className="h-5 w-5" />
            </button>
          </div>
        </div>
        <Button 
          type="submit" 
          disabled={!message.trim() || isLoading}
          className="h-10 w-10 p-0"
        >
          <SendHorizontal className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
};
