import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">

    <Header />
<div className='app_body'>
  <Sidebar />
  <Feed/>
</div>
    {/* {APPBoDY
      SIDEBAR
      FEED
      WIdgets */}
    </div>
  );
}

export default App;
