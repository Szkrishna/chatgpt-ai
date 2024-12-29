import './App.css';
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";

function App() {
  return (
    <div className='App'>
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={gptLogo} alt='Logo' className='logo'/><span className='brand'>ChatGPT</span>
          </div>
          <button className='midBtn'><img src={addBtn} alt='new chat' /><span className='addBtn'></span>New Chat</button>
          <div className='upperSideBottom'>
            <div className='query'><img src={msgIcon} alt='Query' />What is Programming ?</div>
            <div className='query'><img src={msgIcon} alt='Query' />How to use an API ?</div>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'>
            <img src={home} alt='home' className='listItemsImg' />Home
          </div>
          <div className='listItems'>
            <img src={saved} alt='saved' className='listItemsImg' />saved
          </div>
          <div className='listItems'>
            <img src={rocket} alt='rocket' className='listItemsImg' />Upgrade to Pro
          </div>
        </div>
      </div>
      <div className='main'></div>
    </div>
  );
}

export default App;
