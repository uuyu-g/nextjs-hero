import React from "react";
import { useMessageState, useMessageAction } from "./MessageProvider";

export const Messages = () => {
  const messages = useMessageState();
  const { clear } = useMessageAction();
  return (
    messages.length !== 0 && (
      <div>
        <h2>Messages</h2>

        <button className="clear" onClick={() => clear()}>
          clear
        </button>

        {messages.map((message, i) => (
          <div key={i}> {message} </div>
        ))}
      </div>
    )
  );
};
