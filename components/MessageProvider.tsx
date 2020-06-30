import React, { createContext, useState, useContext } from "react";

export type MesssageState = string[];
export type MessageAction = {
  add: (message: string) => void;
  clear: () => void;
};

const MessageContext = createContext<MesssageState>([]);
const MessageActionContext = createContext<MessageAction>({
  add: () => {},
  clear: () => {},
});

export const useMessageState = () => useContext(MessageContext);
export const useMessageAction = () => useContext(MessageActionContext);

export function MessageProvider(props: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<MesssageState>([]);

  const add = (message: string) => {
    setMessages([...messages, message]);
  };

  const clear = () => {
    setMessages([]);
  };

  return (
    <MessageContext.Provider value={messages}>
      <MessageActionContext.Provider value={{ add, clear }}>
        {props.children}
      </MessageActionContext.Provider>
    </MessageContext.Provider>
  );
}
