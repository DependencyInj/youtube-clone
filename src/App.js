import './App.css';
import Body from './components/Body';
import Header from './components/Header';

function App() {
  // eslint-disable-next-line no-lone-blocks
  {/**
    Header
    Body
      SideBar
      MainContainer
        ButtonList
        VideoContainer
          VideoCards
*/}

  return (
    <div>
      <Header />
      <Body />

    </div>
  );
}

export default App;
