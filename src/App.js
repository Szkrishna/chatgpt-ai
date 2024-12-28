import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='sidebar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src='' alt='' /><span className='brand'>ChatGPT</span>
            <button className='midBtn'><img src='' alt='' /><span className='addBtn'>ChatGPT</span>New Chat</button>
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
