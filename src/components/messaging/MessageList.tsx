
import { useRef, useEffect } from "react";
import { Message, MessageProps } from "./Message";

interface MessageListProps {
  messages: MessageProps[];
}

export const MessageList = ({ messages }: MessageListProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full overflow-y-auto p-4">
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
};
