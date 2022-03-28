import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import TopContainer from './components/top_container/TopContainer';
import WhatContainer from './components/what-container/WhatContainer';
import SubTotalContainer from './components/subtotal-container/SubTotalContainer';
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <TopContainer />
      <WhatContainer />
      <SubTotalContainer/>
    </div>
  );
}

export default App;
