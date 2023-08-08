import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import LogOut from './pages/LogOut';
import CheckIn from './pages/CheckIn';
import Detail from './pages/Detail';
import CheckOut from './pages/CheckOut';
import { Provider } from 'react-redux';
import store from './redux/store';

function App(props) {
  return (
    <div>
        <BrowserRouter>
          <Provider store={store}>
                <Routes>
                      <Route path='/' element={<Home/>} />
                      <Route path='/cart' element={<Cart/>} />
                      <Route path='/logout' element={<LogOut/>} />
                      <Route path='/checkin' element={<CheckIn/>} />
                      <Route path='/detail/:id' element={<Detail/>} />
                      <Route path='/checkout' element={<CheckOut/>} />
              </Routes>
          </Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;