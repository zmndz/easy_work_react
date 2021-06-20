import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Hero from './components/Hero/Hero'
import Features from './components/features/Features'
import Quotes from './components/Quotes'
import People from './components/People'
import Contacts from './components/Contacts'

function App() {
  return (
    <div className="">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Hero />
      <Features />
      <Quotes />
      <People />
      <Contacts />
      
    </div>
  );
}

export default App;
