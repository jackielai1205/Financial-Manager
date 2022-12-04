import './App.css';
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import DashboardPage from "./Pages/DashboardPage";
import InsertPage from "./Pages/InsertPage";
import TransactionPage from "./Pages/TransactionPage";
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <Routes>
            <Route path="/dashboard" element={<DashboardPage/>}/>
            <Route path="/insert" element={<InsertPage/>}/>
            <Route path="/transactions" element={<TransactionPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
