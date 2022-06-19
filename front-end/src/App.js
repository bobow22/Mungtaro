import './App.css';
import Register from'./Login & Register/Register'
import Login from'./Login & Register/Login'
import { 
  BrowserRouter as Router,
  Route,
  Routes
} 
from "react-router-dom";

//Test Git
function App() {
  return (<Router>

          <Routes>
              <Route exact path="/" element={<Register/>} />
              <Route exact path="/Login" element={<Login/>} />
          </Routes>

    </Router>
  )
}

export default App;
