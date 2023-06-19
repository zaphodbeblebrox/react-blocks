import './App.css';
import Advertisement from './components/Advertisement';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import SubContents from './components/SubContents';

function App() {
  return (
    <div className="App flex-column">
      <Header />
      <div className='flex-row full-width sbtw'>
        <Navigation />
        <Main>
          <div className='flex-row'>
            <SubContents />
            <SubContents />
            <SubContents />
          </div>
          <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;

