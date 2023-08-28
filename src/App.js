import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';

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
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
