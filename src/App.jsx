import './App.css';
import Header from './components/Header/Header';
import LeftSide from './components/leftSide/LeftSide';
import Navbar from './components/Navbar/Navbar';
import RightSide from './components/rightSide/RightSide';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <div className='w-full min-h-[90vh] grid grid-cols-12'>
        <Navbar />
        <div className="grid grid-cols-1 xl:grid-cols-5 w-full col-span-10">
          {/* Left part */}
          <LeftSide />
          {/* Right Part */}
          <RightSide />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
