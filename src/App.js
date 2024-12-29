import './App.css';
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

function App() {
  return (
    <div className='App'>
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={gptLogo} alt='Logo' className='logo' /><span className='brand'>ChatGPT</span>
          </div>
          <button className='midBtn'><img src={addBtn} alt='new chat' className='addBtn' /><span>New Chat</span></button>
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
      <div className='main'>
        <div className='chats'>
          <div className='chat'>
            <img className='chatImg' src={userIcon} alt='user-icon' />
            <p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='chat bot'>
            <img className='chatImg' src={gptImgLogo} alt='gpt-icon' />
            <p className='txt'>Vestibulum feugiat, elit nec congue efficitur, orci velit egestas ipsum, nec pharetra enim nulla sit amet lectus. Sed posuere lacus ac purus gravida volutpat. Pellentesque tempus metus in lorem efficitur, id mollis odio luctus. Quisque efficitur felis vel nunc molestie dapibus. Ut suscipit nisi in massa mollis, sit amet gravida ligula cursus. Pellentesque ut urna nisi. Nam eu augue bibendum, dapibus lectus id, fermentum libero. Etiam vel odio vel justo tempor vestibulum. Integer vestibulum ultrices felis nec scelerisque. Nulla ac tristique lorem, ac fermentum quam.</p>
          </div>
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input className='text' placeholder='Message ChatGPT' />
            <div className='inpBottom'>
              <button className='send'>
                <img src={sendBtn} alt='send' />
              </button>
            </div>
          </div>
          <p>ChatGPT can make mistakes. Check important info.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
