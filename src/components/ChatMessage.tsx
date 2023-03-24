interface Props {
  ownMessage?: boolean;
  address: string;
  message: string;
}

const ChatMessage = ({ ownMessage, address, message }: Props) => {
  const bubblePosition = ownMessage ? "right" : "left";
  return (
    <div className="chat__row">
      {!ownMessage && <small>{address}</small>}
      <div className={["chat__bubble", bubblePosition].join(" ")}>
        <div className={["chat__message", bubblePosition].join(" ")}>
          {ownMessage}
          {message}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
