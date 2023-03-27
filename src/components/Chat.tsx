import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { ethers } from "ethers";

interface Message {
  address: string;
  date: string;
  content: string;
}
interface Props {
  account?: string;
  chatContract: ethers.Contract | undefined;
}

const Chat = ({ account, chatContract }: Props) => {
  const [textareaContent, setTextareaContent] = useState("");
  const [txnStatus, setTxnStatus] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>();

  const getMessages = async () => {
    if (!chatContract || account) return;

    const messages = await chatContract.getMessages();
    setMessages(() => {
      return messages.map((w: any) => ({
        address: w.sender,
        date: w.timestamp._hex,
        content: w.content,
      }));
    });
  };

  useEffect(() => {
    // Let's call `getMessages` if there is an instance of the chatContract and that `message`is undefined
    if (!chatContract || messages) return;
    getMessages();
  }, [chatContract]);

  return (
    <div className="chat">
      <div className="chat__messages">
      {!chatContract && (
          <p className="state-message">
            Connect to the chat in order to see the messages!
          </p>
        )}
        {account && messages && messages.length === 0 && (
          <p className="state-message">There is no message to display</p>
        )}
        {messages &&
          messages.length > 0 &&
          messages.map((m, i) => (
            <ChatMessage
              key={i}
              ownMessage={m.address === account}
              address={m.address}
              message={m.content}
            />
          ))}
      </div>
      <div className="chat__actions-wrapper">
        {!account && (
          <p className="state-message">Connect With Metamask to chat!</p>
        )}
        <div className="chat__input">
          <textarea
            disabled={!!txnStatus || !account}
            value={textareaContent}
            onChange={(e) => {
              setTextareaContent(e.target.value);
            }}
          ></textarea>
          <button disabled={!!txnStatus || !account}>
            {txnStatus || "send message"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
