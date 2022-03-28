import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import TopContainer from './components/top_container/TopContainer';
import WhatContainer from './components/what-container/WhatContainer';
import SubTotalContainer from './components/subtotal-container/SubTotalContainer';
import PreferContainer from './components/prefer-container/PreferContainer';
import ProcessOrderYes from './components/process-order-yes-container/ProcessOrderYes';
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <TopContainer />
      <WhatContainer />
      <SubTotalContainer/>
      <PreferContainer/>
      <ProcessOrderYes/>
    </div>
  );
}

export default App;
