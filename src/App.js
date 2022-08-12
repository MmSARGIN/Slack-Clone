import Main from './comp/Main';
import Navbar from './comp/Navbar';
import Sidebar from './comp/Sidebar';

function App() {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
