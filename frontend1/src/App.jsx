import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register'
import FB from './components/FB'
import AgentScreen from './components/AgentScreen';
import Disconnect from './components/Disconnect';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/fb' element={<FB />} />
          <Route path='/agentScreen' element={<AgentScreen/>} />
          <Route path='/disconnect' element={<Disconnect/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;