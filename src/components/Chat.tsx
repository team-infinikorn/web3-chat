const Chat = () => {

  return (
    <div className="chat">
      <div className="chat__messages">
        <p className="state-message">
          Connect to the chat in order to see the messages!
        </p>
        <p className="state-message">There is no message to display</p>
        <div className="chat__row">
          <div className="chat__bubble left">
            <div className="chat__message left">
              Hello
            </div>
          </div>
        </div>
        <div className="chat__row">
          <div className="chat__bubble right">
            <div className="chat__message right">
              Hi
            </div>
          </div>
        </div>
      </div>
      <div className="chat__actions-wrapper">
        <p className="state-message">Connect With Metamask to chat!</p>
        <div className="chat__input">
          <textarea></textarea>
          <button>
            {"send message"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
