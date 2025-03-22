
import { useState } from "react";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import { MessageProps } from "./Message";

export const Chat = () => {
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      content: "Hi! I'm looking for someone to study with for the CMPT 120 midterm next week.",
      timestamp: "10:30 AM",
      sender: {
        name: "Alex Johnson",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop"
      }
    },
    {
      content: "Hey Alex! I'm in that class too. What topics are you focusing on?",
      timestamp: "10:32 AM",
      sender: {
        name: "You",
        avatar: ""
      },
      isOwn: true
    },
    {
      content: "I'm struggling with the loop concepts and arrays. Would be great to go over those together.",
      timestamp: "10:35 AM",
      sender: {
        name: "Alex Johnson",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop"
      }
    }
  ]);

  const handleSendMessage = (content: string) => {
    const newMessage: MessageProps = {
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sender: {
        name: "You",
        avatar: ""
      },
      isOwn: true
    };

    setMessages(prev => [...prev, newMessage]);

    // Simulate a response after 1 second
    setTimeout(() => {
      const responseMessage: MessageProps = {
        content: "That sounds great! How about we meet at the library tomorrow at 2pm?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: {
          name: "Alex Johnson",
          avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop"
        }
      };
      setMessages(prev => [...prev, responseMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-white/5 dark:bg-black/20 rounded-xl overflow-hidden border border-white/10">
      <div className="p-4 border-b border-white/10 bg-white/5 dark:bg-black/30">
        <h2 className="font-semibold">Chat with Alex Johnson</h2>
        <p className="text-xs text-foreground/70">Online • CMPT 120</p>
      </div>
      <div className="flex-1 overflow-hidden">
        <MessageList messages={messages} />
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};
