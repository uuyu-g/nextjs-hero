import React from "react";
import { useSelector } from "react-redux";
import { selectMessage, messageAction } from "../lib/slices/messageSlice";
import { useAppDispatch } from "../store";

export const Messages = () => {
  const messages = useSelector(selectMessage);
  const dispatch = useAppDispatch()

  const clear = () => {
    dispatch(messageAction.clear());
  }

  return (
    <>
      {messages.length !== 0 && (
      <div>
        <h2>Messages</h2>

        <button className="clear" onClick={clear}>
          clear
        </button>

        {messages.map((message, i) => (
          <div key={i}> {message} </div>
        ))}
      </div>
      )}

      <style jsx>{`
        h2 {
          color: red;
          font-family: Arial, Helvetica, sans-serif;
          font-weight: lighter;
        }
        body {
          margin: 2em;
        }
        body,
        input[text],
        button {
          color: crimson;
          font-family: Cambria, Georgia;
        }

        button.clear {
          font-family: Arial;
          background-color: #eee;
          border: none;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer;
          cursor: hand;
        }
        button:hover {
          background-color: #cfd8dc;
        }
        button:disabled {
          background-color: #eee;
          color: #aaa;
          cursor: auto;
        }
        button.clear {
          color: #333;
          margin-bottom: 12px;
        }
      `}</style>
    </>
  );
};
