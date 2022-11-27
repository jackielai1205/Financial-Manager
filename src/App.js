import './App.css';
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import DashboardPage from "./Pages/DashboardPage";
import InsertPage from "./Pages/InsertPage";
import TransitionPage from "./Pages/TransitionPage";
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <div className ="Page">
            <Routes>
                <Route path="/dashboard" element={<DashboardPage/>}/>
                <Route path="/insert" element={<InsertPage/>}/>
                <Route path="/transition" element={<TransitionPage/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
