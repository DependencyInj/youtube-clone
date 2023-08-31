import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer/>
      },
      {
        path:'/watch',
        element: <WatchPage/>
      }
    ]
}])


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
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
