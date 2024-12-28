import './App.css';
import gptLogo from "./assets/chatgpt.svg"

function App() {
  return (
    <div className='App'>
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={gptLogo} alt='Logo' /><span className='brand'>ChatGPT</span>
            <button className='midBtn'><img src='' alt='' /><span className='addBtn'></span>New Chat</button>
            <div className='upperSideBottom'>
              <div className='query'><img src='' alt='' />What is Programming ?</div>
              <div className='query'><img src='' alt='' />What is Programming ?</div>
            </div>
          </div>
        </div>
        <div className='lowerSide'>

        </div>
      </div>
      <div className='main'></div>
    </div>
  );
}

export default App;
