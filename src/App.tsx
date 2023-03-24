import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <>
          <b>Connected as:</b>
          <br />
        </>
        <button>
          Connect With MetaMask
        </button>
        <p>Please install MetaMask</p>
      </div>
      <div className="chat">
        <div className="s">
          <p className="state-message">
            Connect to the chat in order to see the messages!
          </p>
          <p className="state-message">There is no message to display</p>
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
    </div>
  );
}

export default App;
